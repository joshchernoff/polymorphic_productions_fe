import { combineForms } from 'react-redux-form';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialRegistration = { email: '', password: '' };
const store = createStore(
  combineForms({
    registration: initialRegistration,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default store;
