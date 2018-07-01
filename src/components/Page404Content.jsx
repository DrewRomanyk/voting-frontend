/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

class Page404Content extends Component {
    render() {
        return (
            <Container className="centered" textAlign="center">
                <div>
                    <h2>Oops!</h2>
                    <p>The requested URL {window.location.pathname} was not found!</p>
                    <Link to="/">Go back home</Link>
                </div>
            </Container>
        );
    }
}

export default Page404Content;
