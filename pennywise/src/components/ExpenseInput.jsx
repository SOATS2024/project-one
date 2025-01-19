import { Plus } from "lucide-react";
import { useFirebase } from "../context/firebase";
import { useState } from "react";

const ExpenseForm = () => {
  const firestore = useFirebase();
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);
  const handleAddExpense = (e) => {
    e.preventDefault();
    firestore.addExpense(expense, amount);
    setExpense("");
    setAmount(0);
  };
  return (
    <div className="flex flex-col bg-white shadow-lg m-5 mr-0 p-7 gap-4 rounded-lg max-h-[300px]">
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
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="description"
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
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content"
          />
        </div>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 text-white pt-3 pl-7 pointer-events-none">
          <Plus strokeWidth={1.5} />
        </span>
        <button
          type="button"
          onClick={(e) => {
            handleAddExpense(e);
          }}
          className="inline-flex bg-secondary px-10 p-3 pl-14 rounded-md font-bold text-white hover:bg-hover_secondary font-content text-lg"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
