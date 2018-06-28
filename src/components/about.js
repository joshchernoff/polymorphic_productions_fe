import React, { Component } from 'react';
import SectionHeader from './section-header';
export default class About extends Component {
  render() {
    return (
      <div>
        <SectionHeader
          title="About"
          image="https://polymorphic.productions/assets/posts-43ebb75e5d33ea48549dcb7d94c4cf6a44bce5e7cde5cc70cdce7973b1ff2a05.jpg"
        />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h6 className="heading-uppercase">Web Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <h6 className="heading-uppercase">Responsibilities:</h6>
                <ul className="list-icon list-icon-check">
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                  <li>Fourth</li>
                </ul>
              </div>
              <div className="col-12 col-lg-4">
                <h6 className="heading-uppercase">Requirements:</h6>
                <ul className="list-icon list-icon-check">
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                  <li>Fourth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
