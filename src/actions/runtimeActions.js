import * as api from '../api/runtime/appDefinition';
import { GET_APPDEFINITION } from './actionTypes';

export function getAppDefinition() {
    return function(dispatch) {
      // Submit username/password to the server
      api.getAppDefinition()
        .then(response => {
          // If request is good...
          // - Update state to indicate user is authenticated
          dispatch({ type: GET_APPDEFINITION, payload:response.data});
          // - Save the JWT token
          // localStorage.setItem('token', response.data.token);
  
        })
        .catch((e) => {
          // If request is bad...
          // - Show an error to the user
        //   dispatch(authError('Bad Login Info'));
        debugger
        });
    }
  }