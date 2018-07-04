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
    const { active, link, title } = this.props;
    return (
      <li className="nav-item">
        <Link className={`nav-link ${active ? 'active' : ''}`} to={link}>
          {title}
        </Link>
      </li>
    );
  }
}

export default NavItem;
