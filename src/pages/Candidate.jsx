/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Page from '../template/Page';
import CandidateContent from '../components/CandidateContent';

class Home extends Component {
    render() {
        return (
            <Page>
                <CandidateContent />
            </Page>
        );
    }
}

export default Home;
