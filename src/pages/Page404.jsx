/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Page from '../template/Page';
import Page404Content from '../components/Page404Content';

class Page404 extends Component {
    render() {
        return (
            <Page>
                <Page404Content />
            </Page>
        );
    }
}

export default Page404;
