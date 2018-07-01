/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/navbar';
import Footer from '../components/Footer';

const navItems = ['candidates', 'elections', 'about', 'account'];

class Page extends Component {
    static propTypes = {
        header: PropTypes.element,
        children: PropTypes.element.isRequired,
        footer: PropTypes.element,
    }

    static defaultProps = {
        header: <NavBar navItems={navItems} />,
        footer: <Footer />,
    }

    render() {
        const { header, children, footer } = this.props;

        return (
            <div className="wrapper">
                <div className="header">
                    {header}
                </div>
                <div className="content">
                    {children}
                </div>
                <div className="footer">
                    {footer}
                </div>
            </div>
        );
    }
}

export default Page;
