// API
import Axios from 'axios';
const domain = 'http://localhost:4000';
const root_url = '/api/v1';
const make_url = path => {
  return domain + root_url + path;
};
export const emailChecker = email => {
  return Axios.get(make_url('/users/precheck?user[email]=' + email));
};

import React, { Component } from 'react';
import _ from 'lodash';

class EmailInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }
  checkEmail = value => {
    emailChecker(value).then(
      success => {
        if (success.data.precheck == 'ok') {
          this.props.form.setFieldError(
            this.props.field.name,
            this.props.form.errors['email'],
          );
        } else {
          this.props.form.setFieldError(
            this.props.field.name,
            success.data.error,
          );
        }

        // if you need to show more info, like a checkbox:
        // this.props.form.setStatus({ email: true })
      },
      error =>
        this.props.form.setFieldError(
          this.props.name,
          transformErrorToEnglish(error),
        ),
    );
  };

  debouncedCheckEmail = _.debounce(this.checkEmail, 300); // 300ms debounce

  handleChange = e => {
    this.props.field.onChange(e); // this will let Formik's default validation take place
    this.debouncedCheckEmail(e.target.value);
  };

  handleBlur = e => {
    this.props.field.onBlur(e); // this will let Formik's default validation take place
    this.checkEmail(e.target.value);
  };

  render() {
    const { field, form, ...props /*  like placeholder */ } = this.props;
    return (
      <div>
        <input
          {...field}
          {...props}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          autoComplete="off"
        />
        {/** show errors */}
      </div>
    );
  }
}

export default EmailInput;
