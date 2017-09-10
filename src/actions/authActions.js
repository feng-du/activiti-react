import { signout, signin, getAccount } from '../auth/auth';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_ACCOUNT
} from './actionTypes';


export function signinUser({ username, password }) {
  return function(dispatch) {
    // Submit username/password to the server
    signin(username, password)
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        dispatch({ type: FETCH_ACCOUNT, payload: response })

      })
      .catch((e) => {
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
  return dispatch => {
    signout();
    dispatch({ type: UNAUTH_USER });
  }
  
}

export function fetchAccount() {
  return (dispatch) => {
    getAccount()
      .then(response => {
        dispatch({type:FETCH_ACCOUNT, payload:response});
      }).catch(r=> {
        debugger
      });
  }
}
