import * as api from '../api/editor/modelApi';
import * as stencilSetApi from '../api/editor/stencilSetApi';
import { GET_MODELS, EDITOR_PAGE_CHANGED, GET_STENCIL_SET_FOR_EDITOR } from './actionTypes';

export const getModels = (filter, modelType, sort) => dispatch => {
    return api.getModels(filter, modelType, sort)
        .then(r => {
          
          dispatch({ type: GET_MODELS, models: r.data.data});
        });
      
};

export const getStencilSetForEditor = () => dispatch => {
  return stencilSetApi.getStencilSetForEditor()
      .then(r=>{
        dispatch({ type: GET_STENCIL_SET_FOR_EDITOR, stencils: r.data.data })
      });
};

export const editPageChanged = (pageId) => dispatch => {
  dispatch({ type: EDITOR_PAGE_CHANGED, payload:pageId });
};