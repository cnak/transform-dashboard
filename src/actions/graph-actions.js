export const IS_LOADING = 'IS_LOADING';
export const ISNT_LOADING = 'ISNT_LOADING';
export const ADD_DATA = 'ADD_DATA';

export const is_loading = () => {
  return {
    type: IS_LOADING,
    switch: true
  };
};

export const isnt_loading = () => {
  return {
    type: ISNT_LOADING,
    switch: false
  };
};

export const add_data = newData => {
  return {
    type: ADD_DATA,
    newData
  };
};
