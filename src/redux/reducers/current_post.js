import { POST_REQUESTED_SUCCESS } from '../../actions/blog';

export const current_post = (state = {}, action) => {
  switch (action.type) {
    case POST_REQUESTED_SUCCESS:
      const { post } = action.payload.data;
      return post;
    default:
      return state;
  }
};
