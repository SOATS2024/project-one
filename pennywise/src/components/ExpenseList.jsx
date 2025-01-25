import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFirebase } from "../context/firebase";
import { Edit, Trash, RefreshCw, Loader2 } from "lucide-react";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseSummaryCard } from "./ExpenseSummaryCard";

const ExpenseList = ({ timeFrame }) => {
  const firebase = useFirebase();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const calculateTotal = () => {
    return expenses
      .reduce((sum, expense) => sum + expense.amount, 0)
      .toFixed(2);
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
      // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="">
      <div className="">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {timeFrame === "today" && (
            <div className="lg:col-span-1">
              <ExpenseForm
                addExpenseToList={addExpenseToList}
                selectedExpense={selectedExpense}
                clearSelectedExpense={clearSelectedExpense}
                loadExpenses={loadExpenses}
              />
            </div>
          )}
          <div className="lg:col-span-1">
            <ExpenseSummaryCard
              expenses={expenses}
              calculateTotal={calculateTotal}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-secondary text-white font-header text-sm md:text-base">
                  <tr>
                    <th className="sticky top-0 p-3 md:p-4 w-12">#</th>
                    <th className="sticky top-0 p-3 md:p-4">Description</th>
                    <th className="sticky top-0 p-3 md:p-4 w-32">Amount</th>
                    <th className="sticky top-0 hidden md:table-cell p-4 w-48">
                      Date
                    </th>
                    <th className="sticky top-0 p-3 md:p-4 w-24">Actions</th>
                    <th className="sticky top-0 p-3 md:p-4 w-12">
                      <div className="relative group">
                        <button
                          onClick={loadExpenses}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          disabled={loading}
                          aria-label="Refresh Data"
                        >
                          {loading ? (
                            <Loader2 className="animate-spin w-5 h-5" />
                          ) : (
                            <RefreshCw strokeWidth={1.5} className="w-5 h-5" />
                          )}
                        </button>
                        <div className="absolute right-0 mt-2 py-1 px-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Refresh Data
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="font-content text-sm md:text-base divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="p-4 text-center">
                        <div className="flex justify-center items-center">
                          <Loader2 className="animate-spin h-6 w-6 text-secondary" />
                          <span className="ml-2 text-gray-500">
                            Loading expenses...
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : expenses.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-4 text-center text-gray-500">
                        No expenses found for this time period.
                      </td>
                    </tr>
                  ) : (
                    expenses.map((expense, index) => (
                      <tr key={expense.id} className="hover:bg-gray-50">
                        <td className="p-3 md:p-4">{index + 1}</td>
                        <td className="p-3 md:p-4">{expense.description}</td>
                        <td className="p-3 md:p-4">
                          ${expense.amount.toFixed(2)}
                        </td>
                        <td className="hidden md:table-cell p-4">
                          {formatDate(expense.date)}
                        </td>
                        <td className="p-3 md:p-4">
                          <div className="flex space-x-2">
                            <button
                              type="button"
                              className="text-secondary hover:text-hover_secondary"
                              onClick={() => handleEditExpense(expense)}
                            >
                              <Edit
                                strokeWidth={1.5}
                                className="w-4 h-4 md:w-5 md:h-5"
                              />
                            </button>
                            <button
                              type="button"
                              className="text-secondary hover:text-hover_secondary"
                              onClick={() => handleDeleteExpense(expense.id)}
                            >
                              <Trash
                                strokeWidth={1.5}
                                className="w-4 h-4 md:w-5 md:h-5"
                              />
                            </button>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ExpenseList.propTypes = {
  timeFrame: PropTypes.string.isRequired,
};

export { ExpenseList };
