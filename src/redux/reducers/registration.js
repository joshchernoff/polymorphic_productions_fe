import {
  REGISTRATION_SUCCESS,
  REGISTRATION_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
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
