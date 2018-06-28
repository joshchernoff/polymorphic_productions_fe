import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={this.props.link}>
          {this.props.title}
        </Link>
      </li>
    );
  }
}
