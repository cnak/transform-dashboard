export const IS_LOADING = 'IS_LOADING';
export const ISNT_LOADING = 'ISNT_LOADING';
export const UPDATE_BIRTHDAY_NAME = 'UPDATE_BIRTHDAY_NAME'

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

export const Update= (item, data) => {
    return {
        type: Item,
        data
    }
}

