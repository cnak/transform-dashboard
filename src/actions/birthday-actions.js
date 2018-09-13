
export const UPDATE_BIRTHDAY_NAME = 'UPDATE_BIRTHDAY_NAME';
export const UPDATE_DATE = 'UPDATE_DATE';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';



export const update = (item, data) => {
    return {
        type: item,
        data
    }
}

