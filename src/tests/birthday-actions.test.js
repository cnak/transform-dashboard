import * as birthdayActions from '../actions/birthday-actions';

describe('birthday actions', () => {
    describe('Is_Loading', () => {
        it('returns an action called switch that is true', () => {
            const expectedAction = {
                type: birthdayActions.IS_LOADING,
                switch: true
            }
            expect(birthdayActions.Is_Loading()).toEqual(expectedAction)
        })
    })
        describe('Isnt_Loading', () => {
            it('returns an action called switch that is false', () => {
                const expectedAction = {
                    type: birthdayActions.ISNT_LOADING,
                    switch: false
                }
                expect(birthdayActions.Isnt_Loading()).toEqual(expectedAction)
            })
        })
    describe('Update', ()=> {
        it('updates the required item with data', ()=> {
            const item = birthdayActions.UPDATE_BIRTHDAY_NAME
            const data = 'charlene'
            const expectedAction = {
                type: item,
                data: data
            }
            expect(birthdayActions.Update(item, data)).toEqual(expectedAction)
        })
    })
})