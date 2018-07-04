import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
// Facebook and Twitter icons
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';
fontawesome.library.add(faArrowDown);

export default class SectionHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="section-fullscreen bg-image parallax"
        style={{
          backgroundImage: `url(${this.props.image})`,
        }}
      >
        <div className="page-title-sm bg-black-07 text-center">
          <div className="container">
            <h1 className="font-weight-light">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}
