import { IS_LOADING, ISNT_LOADING, ADD_DATA } from '../actions/graph-actions';

export const initialGraphState = {
    loading: false,
    data: []
}

export const graphReducer = (state = initialGraphState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                loading: action.switch
            };
        }
        case ISNT_LOADING: {
            return {
                ...state,
                loading: action.switch
            };
        }
        case ADD_DATA: {
            return {
                ...state, 
                data: action.newData
            }
        }
        default:
        return state;
    }
}