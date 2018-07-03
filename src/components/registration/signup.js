import React, { Component } from 'react';
// import SectionHeader from './section-header';
import { Control, Form, actions } from 'react-redux-form';
import { connect } from 'react-redux';

function emailIsValid(email) {
  console.log(email);
  // terrible validation, I know
  return email && email.length > 0;
}
class Signup extends Component {
  handleChange(values) {
    console.log(values);
  }
  handleUpdate(form) {
    console.log(form);
  }
  handleSubmit(values) {
    console.log(values);
  }
  render() {
    const { dispatch, registration } = this.props;

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

                  <Form
                    model="registration"
                    onUpdate={form => this.handleUpdate(form)}
                    onChange={values => this.handleChange(values)}
                    onSubmit={values => this.handleSubmit(values)}
                  >
                    <input name="utf8" type="hidden" value="&#x2713;" />
                    <div className="form-inputs">
                      <Control.text
                        model="registration.email"
                        placeholder="Your Email"
                        onBlur={() =>
                          dispatch(
                            actions.validate(
                              'registration.email',
                              emailIsValid,
                            ),
                          )
                        }
                      />

                      <Control.text
                        model="registration.password"
                        placeholder="Your Password"
                        type="password"
                        required
                      />

                      <button className="button button-lg button-outline-white-2 button-fullwidth">
                        Sign Up
                      </button>
                    </div>
                  </Form>

                  <div className="margin-top-30">
                    <p>
                      By signing up, you agree to our{' '}
                      <a href="#">Terms of Use</a>
                    </p>
                  </div>
                  <div className="margin-top-30">
                    <a href="/users/sign_in">Log in</a>
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

export default connect(state => state.registration)(Signup);
