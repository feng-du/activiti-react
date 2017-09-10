import {
    GET_APPDEFINITION
} from '../actions/actionTypes';
    
export default function(state = {}, action) {
    switch (action.type) {
    case GET_APPDEFINITION:
        return { ...state, apps: action.payload };
    }

    return state;
}