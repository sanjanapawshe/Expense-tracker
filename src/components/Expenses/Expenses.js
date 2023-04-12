import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFiltereddYear] = useState('2020')
    const selectedYearHandler = (selectedYear) => {
        setFiltereddYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectYear={selectedYearHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>
                {/* {filteredExpenses.length === 0 && expensesContent}
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key= {expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                ))} */}
            </Card>
        </div>
    );
}

export default Expenses;