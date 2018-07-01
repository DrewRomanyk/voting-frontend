/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';

import NavBar from '../components/navbar';

class Home extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
    }

    render() {
        return (
            <div>
                <NavBar menuItems={['Candidates', 'Elections', 'About']} pathname={this.props.location.pathname}/>
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
