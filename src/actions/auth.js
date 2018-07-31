import Axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user,
  };
};

// function loginError(message) {
//   return {
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message,
//   };
// }

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    user: null,
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function requestRegistation() {
  return {
    type: REGISTRATION_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  };
}
export function receiveRegistration(user) {
  return {
    type: REGISTRATION_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user,
  };
}

export const authenticate = token => {
  return dispatch => {
    localStorage.setItem('token', token);
    dispatch(receiveLogin(token));
  };
};

export const signout = () => {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.clear();
    dispatch(receiveLogout());
  };
};

export const signin = creds => {
  return dispatch => {
    dispatch(requestLogin());
    return new Promise((resolve, reject) => {
      const { email, password } = creds;
      Axios.post(
        make_url('/sign_in'),
        { email, password },
        { withCredentials: true },
      )
        .then(response => {
          const user = response.data.data.user;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(receiveRegistration(user));
            resolve(user);
          }
        })
        .catch(errors => {
          reject(errors.response.data.errors);
        });
    });
  };
};

export const register = user => {
  return dispatch => {
    dispatch(requestRegistation());
    return new Promise((resolve, reject) => {
      Axios.post(make_url('/sign_up'), {
        data: { user: user },
        withCredentials: true,
      })
        .then(response => {
          const user = response.data.data.user;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(receiveLogin(user));
            resolve(user);
          }
        })
        .catch(errors => {
          reject(errors.response.data.errors);
        });
    });
  };
};

const domain = 'http://localhost:4000';
const root_url = '/api/v1';
const make_url = path => {
  return domain + root_url + path;
};
