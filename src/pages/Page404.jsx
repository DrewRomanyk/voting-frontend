/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/navbar';

class Page404 extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
    }

    render() {
        return (
            <div>
                <NavBar pathname={this.props.location.pathname} />
                <h3>Oops!</h3>
                <p>The requested URL {this.props.location.pathname} was not found!</p>
            </div>
        );
    }
}

export default Page404;
