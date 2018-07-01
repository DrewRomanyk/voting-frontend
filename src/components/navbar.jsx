/* eslint-disable react/forbid-prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import './navbar.css';

class NavBar extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    render() {
        return (
            <nav>
                <div className="nav-logo">
                    <Link to="/">Cool Voting Info App</Link>
                </div>
                <div className="nav-right">
                    {
                        this.props.menuItems.map(menuItem =>
                            (
                                <NavItem
                                    name={menuItem}
                                    active={this.props.location.pathname.startsWith(`/${menuItem}`)}
                                    key={menuItem}
                                />
                            ))
                    }
                </div>
            </nav>
        );
    }
}

/* NavItem functional component */
const NavItem = props => (<Link to={`/${props.name}`} className={`nav-item ${props.active ? 'active' : ''}`}>{props.name}</Link>);

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

NavItem.defaultProps = {
    active: false,
};

export default withRouter(NavBar);
