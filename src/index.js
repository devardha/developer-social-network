import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-common';
import fetch from 'node-fetch';

import App from './App';

const client = new ApolloClient({
    credentials: 'include',
    link: createHttpLink({
        uri: 'http://localhost:3000/graphql',
        fetch: fetch,
        credentials: 'include',
        fetchOptions: {
            credentials: 'include',
        },
    }),
    cache: new InMemoryCache(),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root'),
    () => {
        client.disableNetworkFetches = false;
    },
);
