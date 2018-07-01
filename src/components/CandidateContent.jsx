/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import logo from '../logo.svg';

class CandidateContent extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Candidate</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload. Boom!
                </p>
            </div>
        );
    }
}

export default CandidateContent;
