import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123cde'
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toEqual(action.uid);
});

test('should remove uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'asdasd'}, action);
    expect(state).toEqual({});
});