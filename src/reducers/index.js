import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import runtimeReducer from './runtimeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  runtime: runtimeReducer,
});

export default rootReducer;