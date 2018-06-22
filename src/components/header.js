import React, { Component } from 'react';
import NavItem from './nav-item';
import NavDropdown from './nav-dropdown';
import Shape from '../images/shape.svg';

// var navbarFixed = $(".navbar-fixed");

// $(window).on("scroll", function() {
//   if ($(window).scrollTop() >= 10) {
//     navbarFixed.addClass("navbar-shrink");
//   } else {
//     navbarFixed.removeClass("navbar-shrink");
//   }
// });
const show_class_name = 'navbar-shrink';

export default class Header extends Component {
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
        return { show: show_class_name };
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
            <a className="navbar-brand" href="./">
              <h5>
                <span>
                  <span className="icon-shape logo" />
                  <span className="name d-none d-sm-inline">
                    Polymorphic Productions
                  </span>
                </span>
              </h5>
            </a>
            <ul className="nav dropdown-dark">
              <NavItem title="foobar" href="./foobar" />
              <NavDropdown />
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
