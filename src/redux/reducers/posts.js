import { POSTS_REQUESTED_SUCCESS } from '../../actions/blog';
export const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_REQUESTED_SUCCESS:
      const { posts } = action.payload.data;
      return posts;
    default:
      return state;
  }
};
