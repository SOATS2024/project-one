import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";
import { Edit, Trash, RefreshCw, Loader2, DollarSign } from "lucide-react";
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
      setError("Failed to delete expense. Please try again.");
    }
  };

  const handleEditExpense = (expense) => {
    setSelectedExpense({
      id: expense.id,
      path: expense.path,
      description: expense.description,
      amount: expense.amount,
    });
  };

  const clearSelectedExpense = () => {
    setSelectedExpense(null);
  };

  const addExpenseToList = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-secondary" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {timeFrame === "today" && (
          <ExpenseForm
            addExpenseToList={addExpenseToList}
            selectedExpense={selectedExpense}
            clearSelectedExpense={clearSelectedExpense}
            loadExpenses={loadExpenses}
          />
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-secondary text-white font-header text-lg">
              <tr>
                <th className="p-4">No.</th>
                <th className="p-4">Description</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="font-content">
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No expenses found for this time period.
                  </td>
                </tr>
              ) : (
                expenses.map((expense, index) => (
                  <tr key={expense.id} className="border-b border-gray-100">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{expense.description}</td>
                    <td className="p-4">${expense.amount.toFixed(2)}</td>
                    <td className="p-4">{formatDate(expense.date)}</td>
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
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 font-header mb-4 flex items-center gap-2">
            <DollarSign className="text-secondary" strokeWidth={1.5} />
            Expense Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Total Expenses</span>
              <span className="text-2xl font-bold text-secondary">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Number of Expenses</span>
              <span className="text-lg font-semibold text-gray-800">
                {expenses.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Expense</span>
              <span className="text-lg font-semibold text-gray-800">
                $
                {(expenses.length
                  ? calculateTotal() / expenses.length
                  : 0
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={loadExpenses}
          className="w-full flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-md text-secondary hover:text-hover_secondary"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <RefreshCw strokeWidth={1.5} />
          )}
          Refresh Data
        </button>
      </div>
    </div>
  );
};

export default ExpenseList;
