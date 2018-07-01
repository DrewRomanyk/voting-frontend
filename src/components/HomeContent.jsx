/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, Select, Input, Container, Icon } from 'semantic-ui-react';

class HomeContent extends Component {
    render() {
        const options = [
            { key: 'address', text: 'Address', value: 'address' },
            { key: 'candidate', text: 'Candidate', value: 'candidate' },
        ];

        return (
            <Container className="centered" textAlign="center">
                <Input type="text" placeholder="Search..." action>
                    <input />
                    <Select compact options={options} defaultValue="candidate" />
                    <Button type="submit">
                        <Icon name="search" />
                    </Button>
                </Input>
            </Container>
        );
    }
}

export default HomeContent;
