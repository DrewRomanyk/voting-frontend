/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import logo from '../logo.svg';

import NavBar from '../components/navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload. Boom!
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
