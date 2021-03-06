import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Store
import { connect } from 'react-redux';
// Layouts
import NavBar from './layout/nav-bar';
import ScrollToTop from './layout/scroll-to-top';
import Footer from './layout/footer';

//Actoins
import { receiveRegistration } from '../actions/auth';
import { BrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/home';
import About from './pages/about';
import TermsAndConditions from './pages/terms-and-conditions';
import PrivacyPolicy from './pages/privacy-policy';
import Contact from './pages/contact';
import Photography from './pages/services-photography';
import Web from './pages/services-web';
import Videography from './pages/services-videography';
import Design from './pages/services-design';

import { Signup } from './registration/signup';
import { Signin } from './session/signin';
import { Signout } from './session/signout';
import { authInit } from '../actions/auth';

import Posts from './blog/posts';
import FullPost from './blog/full-post';

// Styles
import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarShrink: false };
    this.props.authInit();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />

          <ScrollToTop />

          <Switch>
            {/* 
            
            <Route exact path="/user/:id/edit" component={UserEdit} />
            <Route exact path="/user/:id" component={UserShow} />
            <Route exact path="/users" component={Users} />

            <Route exact path="/model/:slug/release/new" component={user} />
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
            <Route exact path="/blog/tags" component={BlogTags} />*/}

            <Route exact path="/blog/:slug" component={FullPost} />
            <Route exact path="/blog" component={Posts} />

            <Route exact path="/services/photography" component={Photography} />
            <Route exact path="/services/videography" component={Videography} />
            <Route exact path="/services/web" component={Web} />
            <Route exact path="/services/design" component={Design} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/terms" component={TermsAndConditions} />
            <Route exact path="/policy" component={PrivacyPolicy} />
            <Route exact path="/about" component={About} />

            <Route exact path="/signout" component={Signout} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/" component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {
  authInit,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
