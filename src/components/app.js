import React, { Component } from "react";
import Header from "./header";
import ScrollToTop from "./scroll-to-top";
import Footer from "./footer";

import "../styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ScrollToTop />
        <Footer />
      </div>
    );
  }
}
