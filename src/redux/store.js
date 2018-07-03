import { combineForms } from 'react-redux-form';
import { createStore } from 'redux';

const initialRegistration = { email: '', password: '' };
const store = createStore(
  combineForms({
    registration: initialRegistration,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
