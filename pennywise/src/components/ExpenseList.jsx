import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";
import { Edit, Trash, RefreshCw, Loader2 } from "lucide-react";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = ({ timeFrame }) => {
  const firebase = useFirebase();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const calculateTotal = () => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };

  const loadExpenses = async () => {
    try {
      setLoading(true);
      const data = await firebase.fetchExpensesByTimeFrame(timeFrame);
      setExpenses(data || []);
      setError(null);
    } catch (error) {
      console.error("Failed to load expenses:", error);
      setError("Failed to load expenses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, [timeFrame]);

  const handleDeleteExpense = async (expenseId) => {
    try {
      await firebase.deleteExpense(expenseId);
      await loadExpenses();
    } catch (error) {
      console.error("Failed to delete expense:", error);
      setError("Failed to delete expense. Please try again.");
    }
  };

  const handleEditExpense = (expense) => {
    setSelectedExpense(expense);
  };

  const clearSelectedExpense = () => {
    setSelectedExpense(null);
  };

  const addExpenseToList = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-8 w-8 text-secondary" />
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex justify-stretch items-start gap-5">
      <div className="m-5 mt-0 w-full flex flex-col items-start justify-center gap-5">
        {error && (
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <ExpenseForm
          addExpenseToList={addExpenseToList}
          selectedExpense={selectedExpense}
          clearSelectedExpense={clearSelectedExpense}
          loadExpenses={loadExpenses}
        />

        <div className="relative flex flex-col w-full h-full text-gray-700 font-content bg-white shadow-md rounded-lg">
          <table className="w-full text-left min-w-max">
            <thead className="font-header text-lg bg-secondary border-b border-gray-300 rounded-lg">
              <tr className="text-white">
                <th className="p-4">No.</th>
                <th className="p-4">Description</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center">
                    No expenses found for this time period.
                  </td>
                </tr>
              ) : (
                expenses
                  .slice()
                  .reverse()
                  .map((expense, index) => (
                    <tr key={expense.id} className="border-b border-gray-200">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{expense.description}</td>
                      <td className="p-4">${expense.amount.toFixed(2)}</td>
                      <td className="p-4">{formatDate(expense.createdAt)}</td>
                      <td className="p-4 space-x-3">
                        <button
                          type="button"
                          className="text-secondary hover:text-hover_secondary"
                          onClick={() => handleEditExpense(expense)}
                        >
                          <Edit strokeWidth={1.5} />
                        </button>
                        <button
                          type="button"
                          className="text-secondary hover:text-hover_secondary"
                          onClick={() => handleDeleteExpense(expense.id)}
                        >
                          <Trash strokeWidth={1.5} />
                        </button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4">
            <button
              type="button"
              onClick={loadExpenses}
              className="flex items-center gap-2 text-secondary hover:text-hover_secondary"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <RefreshCw strokeWidth={1.5} />
              )}
              Reload
            </button>
            <div className="text-xl font-semibold text-secondary">
              Total: ${calculateTotal().toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-5 m-5 mt-0 w-full max-w-sm">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 font-header mb-4">
            Expense Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-600 font-content">Total Expenses</span>
              <span className="text-2xl font-bold text-secondary font-header">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-content">
                Number of Expenses
              </span>
              <span className="text-lg font-semibold text-gray-700 font-header">
                {expenses.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-content">
                Average Expense
              </span>
              <span className="text-lg font-semibold text-gray-700 font-header">
                $
                {(expenses.length
                  ? calculateTotal() / expenses.length
                  : 0
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
