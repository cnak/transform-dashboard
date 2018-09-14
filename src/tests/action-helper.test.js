import * as actionHelpers from '../actions/action-helper';

describe('action helpers', () => {
describe('Is_Loading', () => {
    it('returns an action called switch that is true', () => {
        const expectedAction = {
            type: actionHelpers.IS_LOADING,
            switch: true
        }
        expect(actionHelpers.is_loading()).toEqual(expectedAction)
    })
})
    describe('Isnt_Loading', () => {
        it('returns an action called switch that is false', () => {
            const expectedAction = {
                type: actionHelpers.ISNT_LOADING,
                switch: false
            }
            expect(actionHelpers.isnt_loading()).toEqual(expectedAction)
        })
    })
})