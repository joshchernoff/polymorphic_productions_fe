import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NavDropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    active: PropTypes.bool,
  };
  static defaultProps = {
    active: false,
  };

  render() {
    const { active, title, items } = this.props;

    return (
      <li className={`nav-item nav-dropdown ${active ? 'active' : ''}`}>
        <a className="nav-link">{title}</a>
        <ul className="dropdown-menu">
          {items.map(({ title: title, link: link }, index) => {
            return (
              <li key={index}>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}
