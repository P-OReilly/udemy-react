import { connect } from 'react-redux';
import React from "react";
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount != 1 ? 'expenses' : 'expense';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (<div>
        <h1>Viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}</h1>
    </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);