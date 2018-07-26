import React, { Component } from 'react';
import store from '../../redux/store';
import { signout } from '../../actions/auth';
export class Signout extends Component {
  componentWillMount() {
    signout()(store.dispatch);
    this.props.history.push('/');
  }
  render() {
    return <div> Signing out </div>;
  }
}
