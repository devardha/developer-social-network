import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './components/Navbar';

import './main.scss';

// Page Level Component
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={(props) => <LandingPage {...props} />} />
                    <Route exact path="/home" render={(props) => <HomePage {...props} />} />
                    <Route exact path="/profile" render={(props) => <ProfilePage {...props} />} />
                    <Route component={NotFoundPage} />
                </Switch>
            </>
        );
    }
}

export default App;
