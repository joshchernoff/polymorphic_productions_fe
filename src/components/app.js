import React, { Component } from 'react';
import Header from './header';
import ScrollToTop from './scroll-to-top';
import Footer from './footer';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

import '../styles/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarShrink: false };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />

        <ScrollToTop />

        <Switch>
          {/* <Route exact path="/model/:slug/release/new" component={user} />
          <Route exact path="/model/:slug/release/:id" component={user} />
          <Route exact path="/model/:slug/releases" component={user} />
          <Route exact path="/model/:slug" component={user} />
          <Route exact path="/models" component={user} />

          <Route exact path="/client/:slug/project/new" component={user} />
          <Route
            exact
            path="/client/:slug/project/:slug/edit"
            component={user}
          />
          <Route exact path="/client/:slug/project/:slug" component={user} />
          <Route exact path="/client/:slug/projects" component={user} />

          <Route exact path="/client/:slug/invoice/new" component={user} />
          <Route exact path="/client/:slug/invoice/:id/edit" component={user} />
          <Route exact path="/client/:slug/invoice/:id" component={user} />
          <Route exact path="/client/:slug/invoices" component={user} />

          <Route exact path="/client/new" component={user} />
          <Route exact path="/client/:slug/edit" component={user} />
          <Route exact path="/client/:slug" component={user} />
          <Route exact path="/clients" component={user} />

          <Route exact path="/portfolio/new" component={user} />
          <Route exact path="/portfolio/:category/:slug" component={user} />
          <Route exact path="/portfolio" component={user} />

          <Route exact path="/blog/date/:year/:month/:day" component={user} />
          <Route exact path="/blog/date/:year/:month" component={user} />
          <Route exact path="/blog/date/:year" component={user} />

          <Route exact path="/blog/:slug/edit" component={user} />
          <Route exact path="/blog/:slug" component={user} />
          <Route exact path="/blog/new" component={user} />

          <Route exact path="/blog/comments" component={user} />

          <Route exact path="/blog/category/new" component={user} />
          <Route exact path="/blog/category/:slug/edit" component={user} />
          <Route exact path="/blog/category/:slug" component={user} />
          <Route exact path="/blog/categories" component={user} />

          <Route exact path="/blog/tag/new" component={user} />
          <Route exact path="/blog/tag/:slug/edit" component={user} />
          <Route exact path="/blog/tag/:slug" component={user} />
          <Route exact path="/blog/tags" component={user} />

          <Route exact path="/blog" component={user} />

          <Route exact path="/user/registration" component={registration} />
          <Route exact path="/user/:id/edit" component={user} />
          <Route exact path="/user/:id" component={user} />
          <Route exact path="/users" component={user} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <Route exact path="/services/photography" component={Photography} />
          <Route exact path="/services/videography" component={Photography} />
          <Route exact path="/services/web" component={Photography} />
          <Route exact path="/services/design" component={Photography} /> */}
          <Route exact path="/contact" component={Contact} />

          {/* <Route exact path="/tac" component={TermsAndConditions} />

          <Route exact path="/policy" component={Policy} /> */}

          <Route exact path="/about" component={About} />

          <Route exact path="/" exact component={Home} />

          {/* <Route component={NoMatch} /> */}
        </Switch>

        <Footer />
      </div>
    );
  }
}
