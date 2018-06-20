import React, { Component } from "react";

export default class NavDropdown extends Component {
  render() {
    return (
      <li className="nav-item nav-dropdown">
        <a className="nav-link" href="#">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Dropdown link 1</a>
          </li>
        </ul>
      </li>
    );
  }
}
