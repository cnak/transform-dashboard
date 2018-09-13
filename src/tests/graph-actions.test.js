import * as graphActions from '../actions/graph-actions';

describe('graph actions', () => {
    describe('is_loading', () => {
        it('returns an action called switch that is true', () => {
            const expectedAction = {
                type: graphActions.IS_LOADING,
                switch: true
            }
            expect(graphActions.is_loading()).toEqual(expectedAction)
        })
    })
        describe('isnt_loading', () => {
            it('returns an action called switch that is false', () => {
                const expectedAction = {
                    type: graphActions.ISNT_LOADING,
                    switch: false
                }
                expect(graphActions.isnt_loading()).toEqual(expectedAction)
            })
        })
        describe('add_data', () => {
            it('returns the new data', () => {
                const newData = 'hello'
                const expectedAction = {
                    type: graphActions.ADD_DATA,
                    newData
                }
                expect(graphActions.add_data(newData)).toEqual(expectedAction)
            })
        })

    })