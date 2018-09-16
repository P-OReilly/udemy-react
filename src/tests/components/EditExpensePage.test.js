import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let wrapper, editExpense, removeExpense, history;
beforeEach(() => {
    history = {push: jest.fn()};
    editExpense = jest.fn();
    removeExpense = jest.fn(); 
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]} 
        history={history} 
        removeExpense={removeExpense} 
        editExpense={editExpense}
        /> 
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id: '1'});
    expect(history.push).toHaveBeenLastCalledWith('/');
});