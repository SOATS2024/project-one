import { Edit, Trash } from "lucide-react";

const ExpenseList = () => {
  return (
    <div className="m-5">
      <div className="relative flex flex-col w-full h-full text-gray-700 font-content bg-white shadow-md rounded-lg ">
        <table className="w-full text-left  min-w-max">
          <thead className="font-header text-lg bg-secondary border-b border-gray-300">
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

          {/* <thead className="font-header text-lg">
              <tr className="border-b border-slate-300 bg-slate-50">
                <th className="p-4  leading-none text-slate-500">
                  Description
                </th>
                <th className="p-4 leading-none text-slate-500">Amount</th>
                <th className="p-4 leading-none text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Groceries
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">200</p>
                </td>

                <td className="p-4 border-b border-slate-200 py-5">
                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
<<<<<<< Updated upstream
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Saman
                  </p>
                </td>

                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">300</p>
                </td>

                <td className="p-4 border-b border-slate-200 py-5">
                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
=======
                      <Edit strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      className="text-[#8E1616] hover:text-hover_secondary"
>>>>>>> Stashed changes
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Brown Couch
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">690</p>
                </td>

                <td className="p-4 border-b border-slate-200 py-5">
                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
