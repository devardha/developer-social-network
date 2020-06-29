import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-common';

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://localhost:3000/graphql',
        fetch: fetch,
        credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
});

import './main.scss';

// Page Level Component
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
    render() {
        return (
            <>
                <ApolloProvider client={client}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => {
                                return (
                                    <div>
                                        <LandingPage {...props} />
                                    </div>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/register"
                            render={(props) => {
                                return (
                                    <div>
                                        <RegisterPage {...props} />
                                    </div>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/home"
                            render={(props) => {
                                return (
                                    <div>
                                        <Navbar />
                                        <HomePage {...props} />
                                    </div>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/profile"
                            render={(props) => {
                                return (
                                    <div>
                                        <Navbar />
                                        <ProfilePage {...props} />
                                    </div>
                                );
                            }}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </ApolloProvider>
            </>
        );
    }
}

export default App;
