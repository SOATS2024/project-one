import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase"; // Ensure correct import
import { Edit, Trash } from "lucide-react";

const ExpenseList = () => {
  const { currentUser, fetchExpenses } = useFirebase();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExpenses = async () => {
      if (!currentUser) return; // Wait until user is logged in

      try {
        const data = await fetchExpenses(currentUser.uid); // Pass user ID
        setExpenses(data || []);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, [currentUser, fetchExpenses]); // Dependency array includes currentUser

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (expenses.length === 0) {
    return <div>No expenses found.</div>; // Handle empty state
  }

  return (
    <div className="m-5 mt-0 w-full">
      <div className="relative flex flex-col w-full h-full text-gray-700 font-content bg-white shadow-md rounded-lg">
        <table className="w-full text-left min-w-max">
          <thead className="font-header text-lg bg-secondary border-b border-gray-300">
            <tr className="text-white">
              <th className="p-4">Description</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-200">
                <td className="p-4">{expense.description}</td>
                <td className="p-4">${expense.amount.toFixed(2)}</td>
                <td className="p-4 space-x-3">
                  <button
                    type="button"
                    className="text-secondary hover:text-hover_secondary"
                  >
                    <Edit strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    className="text-secondary hover:text-hover_secondary"
                  >
                    <Trash strokeWidth={1.5} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
