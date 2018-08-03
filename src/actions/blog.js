import { make_url } from '../api';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_REQUESTED_SUCCESS = 'POSTS_REQUESTED_SUCCESS';

export const POST_REQUESTED = 'POST_REQUESTED';
export const POST_REQUESTED_SUCCESS = 'POST_REQUESTED_SUCCESS';

export const postsRequested = () => {
  return {
    type: POSTS_REQUESTED,
    isFetching: true,
    payload: {
      request: {
        url: make_url('/posts'),
        withCredentials: true,
      },
    },
  };
};

export const postRequested = slug => {
  return {
    type: POST_REQUESTED,
    isFetching: true,
    payload: {
      request: {
        url: make_url(`/posts/${slug}`),
      },
    },
  };
};
