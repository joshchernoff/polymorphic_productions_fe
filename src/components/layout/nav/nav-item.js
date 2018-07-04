import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavItem extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    return (
      <li className="nav-item">
        <Link
          className={`nav-link ${this.props.active ? 'active' : ''}`}
          to={this.props.link}
        >
          {this.props.title}
        </Link>
      </li>
    );
  }
}

export default NavItem;
