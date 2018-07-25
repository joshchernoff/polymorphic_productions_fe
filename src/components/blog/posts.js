import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
import Post from './post';

class Posts extends Component {
  render() {
    return (
      <Page title="Blog">
        <div id="posts" className="section">
          <div className="container text-center">
            <div
              class="blog-masonry blog-column-3"
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
  return {};
};
export default connect(mapStateToProps)(Posts);
