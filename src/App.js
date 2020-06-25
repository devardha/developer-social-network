import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';

import './main.scss';

// Page Level Component
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
    render() {
        return (
            <>
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
                        path="/login"
                        render={(props) => {
                            return (
                                <div>
                                    <LoginPage {...props} />
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
            </>
        );
    }
}

export default App;
