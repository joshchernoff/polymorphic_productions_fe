import React, { Component } from "react";

export default class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href={this.props.href}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
