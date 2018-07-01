import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Menu } from 'semantic-ui-react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
        };
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary>
                <Menu.Menu position="right">
                    <ul className="menu-items">
                        {
                            this.props.menuItems.map(menuItem =>
                                (<li
                                    className={`menu-item ${activeItem === menuItem ? 'active' : ''}`}
                                    key={menuItem} 
                                    onClick={this.handleItemClick}>
                                    {menuItem}
                                </li>))
                        }
                    </ul>
                </Menu.Menu>
            </Menu>
        );
    }
}

NavBar.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
