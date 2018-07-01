import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import './navbar.css';

class NavBar extends Component {
    render() {
        const { pathname } = window.location;
        return (
            <Menu pointing secondary>
                <Link to="/">
                    <Menu.Item className="title" name="Voter App" onClick={this.handleItemClick} />
                </Link>
                <Menu.Menu position="right" pointing secondary>
                    <Link to="/candidate">
                        <Menu.Item
                            name="candidates"
                            active={pathname.startsWith('/candidate')}
                        />
                    </Link>
                    <Link to="/election">
                        <Menu.Item
                            name="elections"
                            active={pathname.startsWith('/election')}
                        />
                    </Link>
                    <Link to="/help">
                        <Menu.Item
                            name="help"
                            active={pathname.startsWith('/help')}
                        />
                    </Link>
                    <Link to="/account">
                        <Menu.Item
                            name="account"
                            active={pathname.startsWith('/account')}
                        />
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;
