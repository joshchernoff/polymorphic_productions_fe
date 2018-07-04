import React, { Component } from 'react';
import SectionFullScreen from '../layout/section-full-screen';
import SectionServices from '../layout/section-services';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <SectionFullScreen image="https://polymorphic.productions/assets/home_header_4-c73faf221043a1acb3fa110957c723f61922224db57b7b473e3a42bc713e8b6b.jpg" />
        <SectionServices />
      </div>
    );
  }
}
