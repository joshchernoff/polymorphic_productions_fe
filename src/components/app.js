import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// State
import { Provider } from 'react-redux';

import store from '../redux/store';

// Layouts
import Header from './layout/header';
import ScrollToTop from './layout/scroll-to-top';
import Footer from './layout/footer';

// Pages
import Home from './static/home';
import Signup from './registration/signup';

// Styles
import '../styles/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarShrink: false };
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
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
            <Route
              exact
              path="/client/:slug/invoice/:id/edit"
              component={user}
            />
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

            <Route exact path="/blog/category/new" component={CategoryNew} />
            <Route
              exact
              path="/blog/category/:slug/edit"
              component={CategoryEdit}
            />
            <Route exact path="/blog/category/:slug" component={Category} />
            <Route exact path="/blog/categories" component={Categories} />

            <Route exact path="/blog/tag/new" component={BlogTagNew} />
            <Route exact path="/blog/tag/:slug/edit" component={BlogTagEdit} />
            <Route exact path="/blog/tag/:slug" component={BlogTag} />
            <Route exact path="/blog/tags" component={BlogTags} />

            <Route exact path="/blog" component={Blog} />

            <Route exact path="/user/:id/edit" component={UserEdit} />
            <Route exact path="/user/:id" component={UserShow} />
            <Route exact path="/users" component={Users} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />

            <Route exact path="/services/photography" component={Photography} />
            <Route exact path="/services/videography" component={Videography} />
            <Route exact path="/services/web" component={Web} />
            <Route exact path="/services/design" component={Design} />

            <Route exact path="/contact" component={Contact} />

            <Route exact path="/tac" component={TermsAndConditions} /> */}
            {/* <Route exact path="/policy" component={Policy} /> */}
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/signup" exact component={Signup} />
            <Route exact path="/" exact component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}
