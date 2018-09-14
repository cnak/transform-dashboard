export const GET_MIN = 'GET_MIN';
export const GET_MAX = 'GET_MAX';
export const GET_VALUE = 'GET_VALUE';

export const get = (item, data) => {
    return {
        type: item,
        data
    }
}