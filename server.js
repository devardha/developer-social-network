import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';
import { Helmet } from 'react-helmet';

// Mongoose
import mongoose from 'mongoose';

// Apollo GraphQL
import { ApolloProvider } from '@apollo/react-common';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getDataFromTree } from '@apollo/react-ssr';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// Mongoose Schema
import User from './models/user.model';

require('dotenv').config();
const expressPlayground = require('graphql-playground-middleware-express').default;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        dbName: process.env.DB_NAME,
    })
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log(err));

// Defining Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app });
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.get('*', (req, res) => {
    const context = {};

    const client = new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
            uri: 'http://localhost:3000/graphql',
            fetch: fetch,
            credentials: 'same-origin',
            headers: {
                cookie: req.header('Cookie'),
            },
        }),
        cache: new InMemoryCache(),
    });

    const app = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </ApolloProvider>
    );

    const content = ReactDOMServer.renderToString(app);
    const helmet = Helmet.renderStatic();

    const markup = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        <link rel="stylesheet" type="text/css" href="main.css"></link>
    </head>
    <body>
        <style>/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}.async-hide{opacity:0!important}</style>
        <div id="root">${content}</div>
        <script src="client_bundle.js"></script>
        <script>
            window.__APOLLO_STATE__ = ${JSON.stringify(client.extract()).replace(/</g, '\\u003c')};
        </script>
    </body>
</html>`;

    if (context.status === 404) {
        res.status(404);
    }

    getDataFromTree(app).then(() => {
        res.status(200);
        res.send(`${markup}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
