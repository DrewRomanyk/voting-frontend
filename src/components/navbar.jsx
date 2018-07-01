import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import './navbar.css';

class NavBar extends Component {
    static propTypes = {
        pathname: PropTypes.string.isRequired,
    }

    render() {
        return (
            <Menu pointing secondary>
                <Link to="/">
                    <Menu.Item className="title" name="Voter App" onClick={this.handleItemClick} />
                </Link>
                <Menu.Menu position="right" pointing secondary>
                    <Link to="/candidate">
                        <Menu.Item
                            name="candidates"
                            active={this.props.pathname.startsWith('/candidate')}
                        />
                    </Link>
                    <Link to="/election">
                        <Menu.Item
                            name="elections"
                            active={this.props.pathname.startsWith('/election')}
                        />
                    </Link>
                    <Link to="/about">
                        <Menu.Item
                            name="about"
                            active={this.props.pathname.startsWith('/about')}
                        />
                    </Link>
                    <Link to="/help">
                        <Menu.Item
                            name="help"
                            active={this.props.pathname.startsWith('/help')}
                        />
                    </Link>
                    <Link to="/account">
                        <Menu.Item
                            name="account"
                            active={this.props.pathname.startsWith('/account')}
                        />
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;
