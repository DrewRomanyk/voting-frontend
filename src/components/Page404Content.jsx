/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Page404Content extends Component {
    render() {
        return (
            <Container textAlign="center">
                <h3>Oops!</h3>
                <p>The requested URL {window.location.pathname} was not found!</p>
            </Container>
        );
    }
}

export default Page404Content;
