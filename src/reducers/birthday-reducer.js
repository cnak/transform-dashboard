import { IS_LOADING, ISNT_LOADING, UPDATE_BIRTHDAY_NAME, UPDATE_DATE, UPDATE_IMAGE } from '../actions/birthday-actions';

export const initialBirthdayState = {
    loading: false,
    imageUrl: undefined,
    birthdayName: undefined,
    date: undefined
}

export const birthdayReducer = (state = initialBirthdayState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return Object.assign({}, state, {
                loading: action.switch
            });
        }
        case ISNT_LOADING: {
            return Object.assign({}, state, {
                loading: action.switch
            });
        }
        case UPDATE_BIRTHDAY_NAME: {
            return Object.assign({}, state, {
                birthdayName: action.data
            });
        }
        case UPDATE_DATE: {
            return Object.assign({}, state, {
                date: action.data
            });
        }
        case UPDATE_IMAGE: {
            return Object.assign({}, state, {
                imageUrl: action.data
            });
        }
    }
}