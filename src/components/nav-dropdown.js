import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavDropdown extends Component {
  render() {
    return (
      <li className="nav-item nav-dropdown">
        <a className="nav-link">{this.props.dropdown_title}</a>
        <ul className="dropdown-menu">
          {this.props.items.map(({ title: title, link: link }, index) => {
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
