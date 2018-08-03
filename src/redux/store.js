import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { reducer as api } from 'redux-json-api';

import { registration } from './reducers/registration';
import { users } from './reducers/users';
import { posts } from './reducers/posts';
import { current_post } from './reducers/current_post';
import { shots } from './reducers/shots';
import { clients } from './reducers/clients';
import { models } from './reducers/models';
import { contracts } from './reducers/contracts';
import { invoices } from './reducers/invoices';

const initialState = {
  registration: { isAuthenticated: false },
  users: [],
  posts: [],
  current_post: {},
  shots: [],
  clients: [],
  models: [],
  contracts: [],
  invoices: [],
};
const port = 4000;
const axiosClient = axios.create({
  baseURL:
    location.protocol + '//' + location.hostname + ':' + port + '/api/v1',
  responseType: 'json',
});

const store = createStore(
  combineReducers({
    registration: registration,
    users,
    posts,
    current_post,
    shots,
    models,
    contracts,
    invoices,
    clients,
    api,
  }),
  initialState,
  compose(
    applyMiddleware(axiosMiddleware(axiosClient), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
