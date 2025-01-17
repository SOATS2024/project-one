const ExpenseForm = () => {
  return (
    <div className=" shadow ">
      <div className="flex justify-around items-center">
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Description Here...
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" />
        </div>
      </div>
      <button>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
