import { IS_LOADING, ISNT_LOADING, UPDATE_BIRTHDAY_NAME } from '../actions/birthday-actions';

export const initialBirthdayState = {
    loading: false,
    imageUrl: undefined,
    birthdayName: undefined
}

export const birthdayReducer = (state = initialBirthdayState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return Object.assign({}, state, {
                loading: action.true
            });
        }
        case ISNT_LOADING: {
            return Object.assign({}, state, {
                loading: action.false
            });
        }
        case UPDATE_BIRTHDAY_NAME: {
            return Object.assign({}, state, {
                birthdayName: action.data
            });
        }
    }
}