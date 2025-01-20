import { Plus, Edit3 } from "lucide-react";
import { useFirebase } from "../context/firebase";
import { useState, useEffect } from "react";

const ExpenseForm = ({ addExpenseToList, selectedExpense, clearSelectedExpense , loadExpenses }) => {
  const firestore = useFirebase();
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [expenseId, setExpenseId] = useState(null);

  useEffect(() => {
    if (selectedExpense) {
      setExpense(selectedExpense.description);
      setAmount(selectedExpense.amount);
      setIsEditing(true);
      setExpenseId(selectedExpense.id);
    } else {
      setExpense("");
      setAmount(0);
      setIsEditing(false);
      setExpenseId(null);
    }
  }, [selectedExpense]);

  const handleAddOrUpdateExpense = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await firestore.updateExpense(firestore.currentUser.uid, expenseId, expense, amount);
      clearSelectedExpense();
      
    } else {
      const newExpense = await firestore.addExpense(expense, amount);
      addExpenseToList(newExpense);
    }
    setExpense("");
    setAmount(0);
    setIsEditing(false);
    setExpenseId(null);
    loadExpenses();
  };

  return (
    <div className="flex flex-col bg-white shadow-lg m-5 mr-0 p-7 gap-4 rounded-lg max-h-[220px]">
      <div className="flex flex-row space-x-8 w-full ">
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
            placeholder="Enter Description"
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content w-full"
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
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter Amount"
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content w-full"
          />
        </div>
      </div>
      <div className="">
        <button
          type="button"
          onClick={(e) => {
            handleAddOrUpdateExpense(e);
          }}
          className=" bg-secondary px-10 p-3 pl-14 rounded-md font-bold text-white hover:bg-hover_secondary font-content text-lg w-full flex items-center justify-center gap-2"
        >
          {isEditing ? <Edit3 strokeWidth={1.5} /> : <Plus strokeWidth={1.5} />}
          {isEditing ? "Update Expense" : "Add Expense"}
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;