export const IS_LOADING = 'IS_LOADING';
export const ISNT_LOADING = 'ISNT_LOADING';

export const is_loading = () => {
    return {
        type: IS_LOADING,
        switch: true
    }
}

export const isnt_loading = () => {
    return {
        type: ISNT_LOADING,
        switch: false
    }
}