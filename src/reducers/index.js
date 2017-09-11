import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import runtimeReducer from './runtimeReducer';
import editorReducer from './editorReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  runtime: runtimeReducer,
  editor: editorReducer,
});

export default rootReducer;