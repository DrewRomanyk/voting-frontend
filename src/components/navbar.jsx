import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './navbar.css';

class NavBar extends Component {
    static propTypes = {
        pathname: PropTypes.string.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Menu pointing secondary>
                <Link to="/">
                    <Menu.Item className="title" name="Voter App" onClick={this.handleItemClick} />
                </Link>
                <Menu.Menu position="right" pointing secondary>
                    {
                        this.props.menuItems.map(menuItem =>
                            (
                                <Link to={`/${menuItem}`}>
                                    <Menu.Item
                                        name={menuItem}
                                        active={this.props.pathname.startsWith(`/${menuItem}`)}
                                    />
                                </Link>
                            ))
                    }
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;
