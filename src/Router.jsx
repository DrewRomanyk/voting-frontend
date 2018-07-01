/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Candidate from './pages/Candidate';
import Page404 from './pages/Page404';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/candidates" component={Candidate} />
                        <Route component={Page404} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
