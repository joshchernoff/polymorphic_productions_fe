import React, { Component } from 'react';
import NavItem from './nav-item';
import NavDropdown from './nav-dropdown';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: '' };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(scroll_pos) {
    if (
      document.getElementsByTagName('body').item(0).scrollTop ||
      document.getElementsByTagName('html').item(0).scrollTop > 0
    ) {
      this.setState(() => {
        return { show: 'navbar-shrink' };
      });
    } else {
      this.setState(() => {
        return { show: '' };
      });
    }
  }

  render() {
    return (
      <header>
        <nav
          className={`navbar navbar-absolute navbar-fixed ${this.state.show}`}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h5>
                <span>
                  <span className="icon-shape logo" />
                  <span className="name d-none d-sm-inline">
                    Polymorphic Productions
                  </span>
                </span>
              </h5>
            </Link>
            <ul className="nav dropdown-dark">
              <NavDropdown
                dropdown_title="Services"
                items={[{ title: 'Photography', link: '/photography' }]}
              />
              <NavItem title="Blog" link="/blog" />
              <NavItem title="Contact" link="/contact" />
              <NavItem title="About" link="/about" />
              <NavItem title="Login" link="/login" />
            </ul>
            <button className="nav-toggle-btn">
              <span className="lines" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
