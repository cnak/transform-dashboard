export const IS_LOADING = 'IS_LOADING';
export const ISNT_LOADING = 'ISNT_LOADING';

export const Is_Loading = () => {
    return {
        type: IS_LOADING,
        true
    }
}

export const Isnt_Loading = () => {
    return {
        type: ISNT_LOADING,
        false
    }
}