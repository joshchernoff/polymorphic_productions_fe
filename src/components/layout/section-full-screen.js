import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
// Facebook and Twitter icons
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

    //document.getElementsByTagName("body").items(0).animate({ scrollTop: $(this.hash).offset().top }, 800, "easeInOutQuart");
  }

  render() {
    return (
      <div
        className="section-fullscreen bg-image parallax"
        style={{
          backgroundImage: `url(${this.props.image})`,
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
