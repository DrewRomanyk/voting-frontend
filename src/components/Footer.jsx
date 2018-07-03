/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Select } from 'semantic-ui-react';

import './navbar.css';

class Footer extends Component {
    render() {
        const languageOptions = [
            {
                key: 'en', value: 'en', text: 'English',
            },
            {
                key: 'es', value: 'es', text: 'Español',
            },
        ];
        return (
            <div style={{ width: '100%', backgroundColor: '#414141' }}>
                <Container style={{ paddingTop: '1rem', paddingBottom: '1rem' }} textAlign="center">
                    <span>
                        <Link to="/about">
                            <Button inverted>About Voter App</Button>
                        </Link>
                        <Select placeholder="Language" options={languageOptions} defaultValue="en" />
                    </span>
                </Container>
            </div>
        );
    }
}

export default Footer;
