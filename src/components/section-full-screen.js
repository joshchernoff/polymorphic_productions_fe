import React, { Component } from 'react';
export default class SectionFullScreen extends Component {
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
              <a className="scrolldown" href="#services">
                <i className="ti-arrow-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
