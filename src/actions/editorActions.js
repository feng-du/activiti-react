import * as api from '../api/editor/modelApi';
import { GET_MODELS, EDITOR_PAGE_CHANGED } from './actionTypes';

export const getModels = (filter, modelType, sort) => dispatch => {
    return api.getModels(filter, modelType, sort)
        .then(r => {
          
          dispatch({ type: GET_MODELS, payload:r.data});
        });
      
};

export const editPageChanged = (pageId) => dispatch => {
  dispatch({ type: EDITOR_PAGE_CHANGED, payload:pageId });
};