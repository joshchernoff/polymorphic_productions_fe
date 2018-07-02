import React, { Component } from 'react';
import SectionHeader from './section-header';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <SectionHeader
          title="Contact Me"
          image="https://polymorphic.productions/assets/posts1-c69d519159e5874dfacad41f5e38f4666ab8e5da7f85a524e6d3471220c3d2b8.jpg"
          body="There are four ways, and only four ways, in which we have contact with the world. 
We are evaluated and classified by these four contacts: 
what we do, how we look, what we say, and how we say it.<br />
- Dale Carnegie"
        />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
