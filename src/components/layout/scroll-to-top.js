import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

fontawesome.library.add(faAngleUp);

const scrollTopBtn = document.getElementsByClassName('scrolltotop');

const show_class_name = 'scrolltotop-show';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = { show: '' };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  scrollUp() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  handleScroll(scroll_pos) {
    if (
      document.getElementsByTagName('body').item(0).scrollTop ||
      document.getElementsByTagName('html').item(0).scrollTop > 700
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
      <div id="scrollToTop" className={`scrolltotop ${this.state.show}`}>
        <a
          className="button-circle button-circle-md button-circle-dark"
          onClick={this.scrollUp}
        >
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}
