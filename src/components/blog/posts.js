import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
import Post from './post';
import Axios from 'axios';

import { postsRequested } from '../../actions/blog';

class Posts extends Component {
  componentWillMount() {
    this.props.posts.length == 0 ? this.props.postsRequested() : null;
  }
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
                return <Post {...p} key={p.id} />;
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

const mapDispatchToProps = {
  postsRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
