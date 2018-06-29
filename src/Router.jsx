/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Page404 from './pages/Page404';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/category" component={Category} />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
