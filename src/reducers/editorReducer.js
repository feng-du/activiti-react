import {
    GET_MODELS,
    GET_STENCIL_SET_FOR_EDITOR,
    EDITOR_PAGE_CHANGED
} from '../actions/actionTypes';

import initialState from './initialState';

export default function(state = initialState.editor, action) {
    switch (action.type) {
    case GET_MODELS:
        if(!action.models)
            return state;
        return { ...state, models: action.models };
    case GET_STENCIL_SET_FOR_EDITOR:
        return { ...state, stencils: action.stencils };
    case EDITOR_PAGE_CHANGED:
        return {...state, pageId:action.payload};
    }

    return state;
}