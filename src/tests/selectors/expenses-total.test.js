import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test('should calculate total amount with no expenses in array', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should calculate total amount with one expense in array', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should calculate total amount of all expenses in array', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});