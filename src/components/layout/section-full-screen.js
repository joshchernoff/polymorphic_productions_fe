import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';
fontawesome.library.add(faArrowDown);

export default class SectionFullScreen extends Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(e) {
    e.preventDefault();
    window.scroll({
      top: document.getElementById('services').offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { image } = this.props;
    return (
      <div
        className="section-fullscreen bg-image parallax"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="bg-black-07">
          <div className="container">
            <div className="position-middle">
              <div className="row">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <h1 className="display-4 font-weight-bold">
                    Your personal creative digital metamorphosis
                  </h1>
                </div>
              </div>
            </div>
            <div className="position-bottom icon-lg">
              <a className="scrolldown" href="#services" onClick={this.scroll}>
                <i className="fas fa-arrow-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
