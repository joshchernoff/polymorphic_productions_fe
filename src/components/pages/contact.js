import React, { Component } from 'react';
import Page from './page';

import fontawesome from '@fortawesome/fontawesome';
import faThumbtack from '@fortawesome/fontawesome-free-solid/faThumbtack';
import faEnvelop from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';

fontawesome.library.add(faThumbtack, faEnvelop, faPhone);

class Contact extends Component {
  render() {
    return (
      <Page
        title="Contact"
        size="lg"
        header={
          <p>
            There are four ways, and only four ways, in which we have contact
            with the world. <br />We are evaluated and classified by these four
            contacts: <br />what we do, how we look, what we say, and how we say
            it.<br /> - Dale Carnegie
          </p>
        }
      >
        <div className="section">
          <div className="container text-center">
            <div className="row">
              <div className="col-12" />
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 icon-3xl">
                <i className="fas fa-thumbtack" />
                <h6 className="heading-uppercase margin-top-20">Location</h6>
                <p>Portland OR, 97202</p>
              </div>

              <div className="col-12 col-sm-6 col-md-4 icon-3xl">
                <i className="fas fa-envelope" />
                <h6 className="heading-uppercase margin-top-20">Email</h6>
                <p>
                  <a href="mailto:jchernoff@polymorphic.productions">
                    jchernoff@polymorphic.productions
                  </a>
                </p>
              </div>

              <div className="col-12 col-sm-6 col-md-4 icon-3xl">
                <i className="fas fa-phone" />
                <h6 className="heading-uppercase margin-top-20">Phone</h6>
                <p>1-(971) 533-7446</p>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
export default Contact;
