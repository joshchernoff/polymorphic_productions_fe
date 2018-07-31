import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
import Post from './post';
import Axios from 'axios';

import { fetchPosts } from '../../actions/blog';

class Posts extends Component {
  render() {
    return (
      <Page title="Blog">
        <div id="posts" className="section">
          <div className="container text-center">
            <div
              className="blog-masonry blog-column-3"
              style={{ position: 'relative', height: '570.75px' }}
            >
              {this.props.posts.map(p => {
                return <Post {...p} />;
              })}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: dispatch(fetchPosts()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

const domain = 'http://localhost:4000';
const root_url = '/api/v1';
const make_url = path => {
  return domain + root_url + path;
};
