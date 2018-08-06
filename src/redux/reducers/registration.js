import {
  REGISTRATION_SUCCESS,
  REGISTRATION_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT_REQUEST,
  AUTH_INIT,
  AUTH_INIT_SUCCESS,
} from '../../actions/auth';

export const registration = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        isSubmitting: action.isSubmitting,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        isSubmitting: action.isSubmitting,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload.data.user,
        isAuthenticated: true,
        isFetching: false,
      };
    case AUTH_INIT_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
        isFetching: false,
      };
    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isFetching: false,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        isSubmitting: action.isSubmitting,
        user: action.user,
      };

    default:
      return state;
  }
};
