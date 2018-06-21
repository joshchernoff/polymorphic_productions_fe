import React, { Component } from 'react';
import Header from './header';
import ScrollToTop from './scroll-to-top';
import SectionFullScreen from './section-full-screen';
import SectionServices from './section-services';
import Footer from './footer';
import fontawesome from '@fortawesome/fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';

fontawesome.library.add(faAngleDown);

import '../styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ScrollToTop />
        <SectionFullScreen image="https://polymorphic.productions/assets/home_header_4-c73faf221043a1acb3fa110957c723f61922224db57b7b473e3a42bc713e8b6b.jpg" />
        <SectionServices />
        <Footer />
      </div>
    );
  }
}
