import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/page';
import { Link } from 'react-router-dom';
import { make_url } from '../../api';

export default class Post extends Component {
  render() {
    return (
      <div
        className="blog-post-box"
        style={{ position: 'absolute', left: '0px', top: '0px' }}
      >
        <div className="blog-post-img">
          <Link to={`/blog/${this.props.slug}`}>
            <img src="https://polymorphic.productions//uploads/post/image/7/thumb__DSC9360.jpg" />
          </Link>
        </div>
        <div className="blog-post-content text-left">
          <div className="blog-post-title">
            <h5>
              <Link to={`/blog/${this.props.slug}`}>{this.props.title}</Link>
            </h5>
            <span>{this.props.published_on}</span>
          </div>
          <p>{this.props.description}</p>
          <Link to={`/blog/${this.props.slug}`}>Read More...</Link>
        </div>
      </div>
    );
  }
}
