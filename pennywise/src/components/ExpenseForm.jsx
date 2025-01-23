import { Plus, Edit3, Loader2 } from "lucide-react";
import PropTypes from "prop-types";
import { useFirebase } from "../context/firebase";
import { useState, useEffect } from "react";

const ExpenseForm = ({
  addExpenseToList,
  selectedExpense,
  clearSelectedExpense,
  loadExpenses,
}) => {
  const firestore = useFirebase();
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [expenseId, setExpenseId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedExpense) {
      setExpense(selectedExpense.description);
      setAmount(selectedExpense.amount);
      setIsEditing(true);
      setExpenseId(selectedExpense.id);
    } else {
      setExpense("");
      setAmount("");
      setIsEditing(false);
      setExpenseId(null);
    }
  }, [selectedExpense]);

  const validateForm = () => {
    if (!expense.trim()) {
      setError("Description is required");
      return false;
    }
    if (!amount || amount <= 0) {
      setError("Please enter a valid amount");
      return false;
    }
    return true;
  };

  const handleAddOrUpdateExpense = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isEditing) {
        await firestore.updateExpense(
          selectedExpense.id,
          expense,
          amount,
          selectedExpense.path // Pass the stored path
        );
        clearSelectedExpense();
      } else {
        const newExpense = await firestore.addExpense(expense, Number(amount));
        addExpenseToList(newExpense);
      }
      setExpense("");
      setAmount("");
      setIsEditing(false);
      setExpenseId(null);
      await loadExpenses();
    } catch (error) {
      console.error("Error adding/updating expense:", error);
      setError(
        isEditing ? "Failed to update expense" : "Failed to add expense"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-lg mb-5 mr-0 px-7 py-8 gap-5 rounded-lg max-h-[220px]">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3">
          {error}
        </div>
      )}
      <div className="flex flex-row space-x-8 w-full">
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="description"
            className="block text-base font-medium text-text font-header uppercase"
          >
            Description
          </label>
          <input
            type="text"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            name="description"
            id="description"
            disabled={loading}
            required
            placeholder="Enter Description"
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content w-full disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="amount"
            className="block text-base font-medium text-text font-header uppercase"
          >
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            min="0"
            step="0.01"
            disabled={loading}
            required
            placeholder="Enter Amount"
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content w-full disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleAddOrUpdateExpense}
          disabled={loading}
          className={`bg-secondary px-10 p-3 pl-14 rounded-md font-bold text-white hover:bg-hover_secondary font-content text-lg w-full flex items-center justify-center gap-2 transition-all duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <Loader2 className="animate-spin" strokeWidth={1.5} />
          ) : isEditing ? (
            <Edit3 strokeWidth={1.5} />
          ) : (
            <Plus strokeWidth={1.5} />
          )}
          {loading
            ? isEditing
              ? "Updating..."
              : "Adding..."
            : isEditing
            ? "Update Expense"
            : "Add Expense"}
        </button>
      </div>
    </div>
  );
};
ExpenseForm.propTypes = {
  addExpenseToList: PropTypes.func.isRequired,
  selectedExpense: PropTypes.object,
  clearSelectedExpense: PropTypes.func.isRequired,
  loadExpenses: PropTypes.func.isRequired,
};

export default ExpenseForm;
