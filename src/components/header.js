import React, { Component } from 'react';
import NavItem from './nav-item';
import NavDropdown from './nav-dropdown';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-absolute navbar-fixed">
          <div className="container">
            <a className="navbar-brand" href="./">
              <h5>
                <span>Polymorphic Productions</span>
              </h5>
            </a>

            <NavItem title="foobar" href="./foobar" />
            <NavDropdown />
            <button className="nav-toggle-btn">
              <span className="lines" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
