/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Page from '../template/Page';
import HomeContent from '../components/HomeContent';

class Home extends Component {
    render() {
        return (
            <Page>
                <HomeContent />
            </Page>
        );
    }
}

export default Home;
