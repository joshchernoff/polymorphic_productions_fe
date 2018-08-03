import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
import { Link } from 'react-router-dom';
import { postRequested } from '../../actions/blog';
import { make_url } from '../../api';

import ReactMarkdown from 'react-markdown';

class FullPost extends Component {
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.postRequested(slug);
  }
  render() {
    if (!this.props.title) {
      return <div>Loading...</div>;
    }
    return (
      <Fragment>
        <div
          className="section-fullscreen bg-image parallax"
          style={{
            backgroundImage:
              'url(https://polymorphic.productions/uploads/post/image/7/_DSC9360.jpg)',
          }}
        >
          <div className="bg-black-05">
            <div className="container">
              <div className="position-middle">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="display-4 font-weight-light">
                      {this.props.title}
                    </h1>
                    <p>A blog post about ...</p>
                    <div className="margin-top-30">
                      <a className="scrolldown " href="#post">
                        continue reading<br />
                        <i className="ti-arrow-down" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="post" className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <ReactMarkdown source={this.props.body_raw} />,
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  postRequested,
};

const mapStateToProps = state => {
  return {
    ...state.current_post,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FullPost);
