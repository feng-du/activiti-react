import {
    GET_MODELS,
    EDITOR_PAGE_CHANGED
} from '../actions/actionTypes';

import initialState from './initialState';

export default function(state = {}, action) {
    switch (action.type) {
    case GET_MODELS:
        return { ...state, models: action.payload };
    case EDITOR_PAGE_CHANGED:
        return {...state, pageId:action.payload}
    }

    return state;
}