import AuthApi from '../api/AuthApi';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './actionTypes';


export function signinUser({ username, password }) {
  return function(dispatch) {
    // Submit username/password to the server
    AuthApi.authentication(username,password)
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        // localStorage.setItem('token', response.data.token);

      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}


