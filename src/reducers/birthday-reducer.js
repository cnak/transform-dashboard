import {
  IS_LOADING,
  ISNT_LOADING,
  UPDATE_BIRTHDAY_NAME,
  UPDATE_DATE,
  UPDATE_IMAGE
} from '../actions/birthday-actions';

export const initialBirthdayState = {
  loading: false,
  imageUrl: undefined,
  birthdayName: undefined,
  date: undefined
};

export const birthdayReducer = (state = initialBirthdayState, action) => {
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
    case UPDATE_BIRTHDAY_NAME: {
      return {
        ...state,
        birthdayName: action.data
      };
    }
    case UPDATE_DATE: {
      return {
        ...state,
        date: action.data
      };
    }
    case UPDATE_IMAGE: {
      return {
        ...state,
        imageUrl: action.data
      };
    }
    default:
      return state;
  }
};
