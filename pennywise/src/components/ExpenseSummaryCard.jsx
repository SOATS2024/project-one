import { DollarSign } from "lucide-react";
import propTypes from "prop-types";
const ExpenseSummaryCard = ({ expenses, calculateTotal }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-white dark:bg-slate-950 rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 font-header mb-4 flex items-center gap-2">
          <DollarSign
            className="text-secondary dark:text-dark_secondary"
            strokeWidth={1.5}
          />
          Expense Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-600 dark:text-gray-400">
              Total Expenses
            </span>
            <span className="text-xl md:text-2xl font-bold text-secondary dark:text-dark_secondary">
              ${calculateTotal()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Number of Expenses
            </span>
            <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
              {expenses.length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Average Expense
            </span>
            <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
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
  );
};
ExpenseSummaryCard.propTypes = {
  expenses: propTypes.array.isRequired,
  calculateTotal: propTypes.func.isRequired,
};

export { ExpenseSummaryCard };
