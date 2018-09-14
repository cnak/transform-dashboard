import * as graphActions from '../actions/graph-actions';

describe('graph actions', () => {
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