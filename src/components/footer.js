import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer bg-dark-lighter">
          <div className="container text-center">
            <h4>Polymorphic Productions LLC</h4>
            <ul className="list-horizontal-unstyled icon-lg margin-top-30">
              <li>
                <a href="#">
                  <FontAwesome name="facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesome name="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-left">
                <p>
                  &copy; 2018 ~ Polymorphic Productions, All Rights Reserved.
                </p>
              </div>
              <div className="col-12 col-md-6 text-center text-md-right">
                <ul className="list-horizontal-unstyled">
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
