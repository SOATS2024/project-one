import { Edit, Trash } from "lucide-react";

const ExpenseList = () => {
  return (
    <div className="m-5">
      <div className="relative flex flex-col w-full h-full text-gray-700 font-content bg-white shadow-md rounded-lg ">
        <table className="w-full text-left  min-w-max">
          <thead className="font-header text-lg bg-secondary border-b border-gray-300 rounded-lg">
            <tr className="text-white">
              <th className="p-4">Description</th>
              <th className="p-4"> Amount</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4">Groceries</td>
              <td className="p-4">200</td>
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
            <tr className="border-b border-gray-200">
              <td className="p-4">Groceries</td>
              <td className="p-4">200</td>
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
            <tr className="border-b border-gray-200">
              <td className="p-4">Groceries</td>
              <td className="p-4">200</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
