import React, { Component } from "react";

export default class ScrollToTop extends Component {
  render() {
    return (
      <div className="scrolltotop">
        <a
          className="button-circle button-circle-md button-circle-dark"
          href="#"
        >
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}
