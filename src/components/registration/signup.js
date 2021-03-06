import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import { object, string, ref } from 'yup';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';

class InnerForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props;
    if (this.props.registration.isAuthenticated) {
      return (
        <div
          className="section-fullscreen bg-image parallax"
          style={{
            backgroundImage: `url(https://polymorphic.productions/assets/login-07aa371a95d2042c3e32c0b7466715499b3771bc73dbfbd18025d52e77a30b24.jpg)`,
          }}
        >
          <div className="bg-black-08">
            <div className="container text-center">
              <div className="position-middle">
                <div className="row">
                  <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <h4 className="font-weight-light margin-bottom-30">
                      You are already signed in
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className="section-fullscreen bg-image parallax"
        style={{
          backgroundImage: `url(https://polymorphic.productions/assets/login-07aa371a95d2042c3e32c0b7466715499b3771bc73dbfbd18025d52e77a30b24.jpg)`,
        }}
      >
        <div className="bg-black-08">
          <div className="container text-center">
            <div className="position-middle">
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                  <h4 className="font-weight-light margin-bottom-30">
                    Registration
                  </h4>

                  <form autoComplete="false" onSubmit={handleSubmit}>
                    <div
                      className={
                        errors.email && touched.email
                          ? 'form-group has-danger'
                          : 'form-group'
                      }
                    >
                      <input
                        id="email"
                        placeholder="Enter a email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? 'text-input form-control form-control-danger'
                            : 'text-input form-control'
                        }
                      />
                      {errors.email &&
                        touched.email && (
                          <div className="form-control-feedback">
                            {errors.email}
                          </div>
                        )}

                      <input
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter a password"
                        type="password"
                        className={
                          errors.password && touched.password
                            ? 'text-input form-control form-control-danger'
                            : 'text-input form-control'
                        }
                      />
                      {errors.password &&
                        touched.password && (
                          <div className="form-control-feedback">
                            {errors.password}
                          </div>
                        )}

                      <input
                        id="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Confirm password"
                        type="password"
                        className={
                          errors.password_confirmation &&
                          touched.password_confirmation
                            ? 'text-input form-control form-control-danger'
                            : 'text-input form-control'
                        }
                      />
                      {errors.password_confirmation &&
                        touched.password_confirmation && (
                          <div className="form-control-feedback">
                            {errors.password_confirmation}
                          </div>
                        )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="button button-lg button-outline-white-2 button-fullwidth"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>

                  <div className="margin-top-30">
                    <p>
                      By signing up, you agree to our{' '}
                      <Link to="/terms">Terms of Use</Link>
                    </p>
                  </div>
                  <div className="margin-top-30">
                    <Link to="/login">Log in</Link>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const SignupForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    password_confirmation: '',
  }),
  validationSchema: object().shape({
    email: string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: string()
      .required('Password is required!')
      .min(8, 'Minimum of 8 characters required'),
    password_confirmation: string()
      .oneOf([ref('password')], 'Passwords do not match')
      .required('Password confirmation is required'),
  }),

  handleSubmit: (values, props) => {
    props.props.register(values).then(
      response => {
        props.setSubmitting(false);
      },
      errors => {
        props.setSubmitting(false);
        const keys = Object.keys(errors);
        keys.map(key => {
          props.setFieldError(key, errors[key].toString());
        });
      },
    );
  },
  displayName: 'SignupForm', // helps with React DevTools
})(InnerForm);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: user => dispatch(register(user)),
  };
};
const mapStateToProps = state => {
  return {
    registration: state.registration,
    isSubmitting: state.registration.isSubmitting,
  };
};
export const Signup = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
