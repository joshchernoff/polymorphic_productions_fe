import Axios from 'axios';

const domain = 'http://localhost:4000';
const root_url = '/api/v1';
const make_url = path => {
  return domain + root_url + path;
};

export const emailChecker = email => {
  return Axios.get(make_url('/users/precheck?user[email]=' + email));
};
