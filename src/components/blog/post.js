import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
class Post extends Component {
  render() {
    return (
      <div
        className="blog-post-box"
        style={{ position: 'absolute', left: '0px', top: '0px' }}
        key={this.props.key}
      >
        <div className="blog-post-img">
          <a href="/posts/photos-with-strangers">
            <img src="https://polymorphic.productions//uploads/post/image/7/thumb__DSC9360.jpg" />
          </a>
        </div>
        <div className="blog-post-content text-left">
          <div className="blog-post-title">
            <h5>
              <a href="/posts/photos-with-strangers">{this.props.title}</a>
            </h5>
            <span>May 08, 2018</span>
          </div>
          <p>{this.props.body}</p>
          <a className="text-btn" href="/posts/photos-with-strangers">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps)(Post);
