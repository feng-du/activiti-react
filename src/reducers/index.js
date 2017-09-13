import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  initialState from './initialState';


import authReducer from './authReducer';
import runtimeReducer from './runtimeReducer';
import editorReducer from './editorReducer';

const rootReducer = combineReducers({
  locale: (state = initialState.locale) => state,
  auth: authReducer,
  form: formReducer,
  runtime: runtimeReducer,
  editor: editorReducer,
});

export default rootReducer;