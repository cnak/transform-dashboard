
export const ADD_DATA = 'ADD_DATA';


export const add_data = (newData) => {
    return {
        type: ADD_DATA,
        newData
    }
}