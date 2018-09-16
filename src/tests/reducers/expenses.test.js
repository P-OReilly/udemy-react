import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense be id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove an expense when invalid id provided', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Test',
        note: '',
        amount: 19555,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense with valid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Hum'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        {...expenses[0], description: 'Hum'}, 
        ...expenses.slice(1, expenses.length)
    ]);
});

test('Should not edit an expense when invalid id provided', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Hum'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});