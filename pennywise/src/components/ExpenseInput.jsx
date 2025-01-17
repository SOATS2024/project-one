import { Plus } from "lucide-react";

const ExpenseForm = () => {
  return (
    <div className="flex flex-col bg-white shadow-lg m-5 p-7 gap-4 rounded-lg">
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
            id="amount"
            placeholder="Enter Amount"
            className="block border border-gray-300 rounded-md text-lg mb-4 placeholder-gray-500 px-3 py-2 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-content"
          />
        </div>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 text-white pt-3 pl-7">
          <Plus strokeWidth={1.5} />
        </span>
        <button
          type="button"
          className="inline-flex bg-secondary px-10 p-3 pl-14 rounded-md font-bold text-white hover:bg-hover_secondary font-content text-lg"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
