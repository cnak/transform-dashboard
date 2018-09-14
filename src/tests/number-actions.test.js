import * as numberActions from '../actions/birthday-actions';

describe('number actions', () => {
    describe('get', () => {
        it('gets the data for min', () => {
            const item = numberActions.GET_MIN
            const data = 6
            const expectedAction = {
                type: item,
                data: data
            }
            expect(numberActions.update(item, data)).toEqual(expectedAction)

        })
    })
    describe('get', () => {
        it('gets the data for max', () => {
            const item = numberActions.GET_MAX
            const data = 12
            const expectedAction = {
                type: item,
                data: data
            }
            expect(numberActions.update(item, data)).toEqual(expectedAction)

        })
    })
    describe('get', () => {
        it('gets the data for value', () => {
            const item = numberActions.GET_VALUE
            const data = 'abc'
            const expectedAction = {
                type: item,
                data: data
            }
            expect(numberActions.update(item, data)).toEqual(expectedAction)

        })
    })
})