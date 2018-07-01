/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

class Page404 extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
    }

    render() {
        return (
            <div>
                <Container textAlign="center">
                    <h3>Oops!</h3>
                    <p>The requested URL {this.props.location.pathname} was not found!</p>
                </Container>
            </div>
        );
    }
}

export default Page404;
