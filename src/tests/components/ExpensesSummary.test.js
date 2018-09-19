import React from 'react';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('Should render expense summary component correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary component correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={2355}/>);
    expect(wrapper).toMatchSnapshot();
});