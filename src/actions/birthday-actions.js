export const IS_LOADING = 'IS_LOADING';
export const ISNT_LOADING = 'ISNT_LOADING';
export const UPDATE_BIRTHDAY_NAME = 'UPDATE_BIRTHDAY_NAME';
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';

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

export const update = (item, data) => {
  return {
    type: item,
    data
  };
};
