import * as api from '../api/editor/modelApi';
import * as stencilSetApi from '../api/editor/stencilSetApi';
import buildStencilItemList from './buildStencilItemList';
import { GET_MODELS, GET_MODEL, EDITOR_PAGE_CHANGED, GET_STENCIL_SET_FOR_EDITOR } from './actionTypes';

export const getModels = (filter, modelType, sort) => dispatch => {
    return api.getModels(filter, modelType, sort)
        .then(r => {
          
          dispatch({ type: GET_MODELS, models: r.data.data});
        });
      
};

export const getStencilSetForEditor = () => dispatch => {
  return stencilSetApi.getStencilSetForEditor()
      .then(r=>{
        const stencils = buildStencilItemList(r.data);
        dispatch({ type: GET_STENCIL_SET_FOR_EDITOR, stencils });
      });
};

export const getModel = (modelId) => dispatch => {
  return api.getModel(modelId)
    .then(r => {
      dispatch({ type: GET_MODEL, modelData: r.data })
    });
}

export const editPageChanged = (pageId) => dispatch => {
  dispatch({ type: EDITOR_PAGE_CHANGED, payload:pageId });
};