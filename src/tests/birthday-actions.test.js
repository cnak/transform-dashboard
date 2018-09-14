import * as birthdayActions from '../actions/birthday-actions';

describe('birthday actions', () => {
    
    describe('Update', ()=> {
        it('updates the required item with data, such as UPDATE_BIRTHDAY_NAME', ()=> {
            const item = birthdayActions.UPDATE_BIRTHDAY_NAME
            const data = 'charlene'
            const expectedAction = {
                type: item,
                data: data
            }
            expect(birthdayActions.update(item, data)).toEqual(expectedAction)
        })
        it('updates the required item with data, such as UPDATE_DATE', ()=> {
            const item = birthdayActions.UPDATE_DATE
            const data = '29/12'
            const expectedAction = {
                type: item,
                data: data
            }
            expect(birthdayActions.update(item, data)).toEqual(expectedAction)
        })
        it('updates the required item with data, such as UPDATE_IMAGE', ()=> {
            const item = birthdayActions.UPDATE_IMAGE
            const data = 'www.picture.com'
            const expectedAction = {
                type: item,
                data: data
            }
            expect(birthdayActions.update(item, data)).toEqual(expectedAction)
        })
    })
})