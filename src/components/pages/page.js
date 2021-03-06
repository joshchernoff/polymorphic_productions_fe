import React, { Component } from 'react';
import SectionHeader from '../layout/section-header';
import PropTypes from 'prop-types';

class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <SectionHeader
          title={title}
          size={this.props.size}
          image="https://polymorphic.productions/assets/posts-43ebb75e5d33ea48549dcb7d94c4cf6a44bce5e7cde5cc70cdce7973b1ff2a05.jpg"
        >
          {this.props.header}
        </SectionHeader>
        {children}
      </div>
    );
  }
}
export default Page;
