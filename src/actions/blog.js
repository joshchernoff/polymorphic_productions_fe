import { make_url } from '../api';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_REQUESTED_SUCCESS = 'POSTS_REQUESTED_SUCCESS';

const postsRequested = () => {
  return {
    type: POSTS_REQUESTED,
    isFetching: true,
    payload: {
      request: {
        url: make_url('/posts'),
      },
    },
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(postsRequested());
  };
};
