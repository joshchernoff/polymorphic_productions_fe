import React, { Component } from 'react';
import Page from './page';
class About extends Component {
  render() {
    return (
      <Page title="About">
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
      </Page>
    );
  }
}
export default About;
