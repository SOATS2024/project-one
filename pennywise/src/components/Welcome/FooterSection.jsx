const FooterSection = () => {
  return (
    <footer>
      <div className="flex flex-col">
        <div className="mt-3 items-center">
          <div className="border border-gray-200"></div>
        </div>
        <div className="mt-5 px-4 flex text-lg font-bold font-pennywise"></div>
        <div className="mt-6 items-center">
          <div className="border border-gray-200"></div>
        </div>
        <div className="flex justify-center text-gray-400 py-4 font-content">
          <span>© 2025 PennyWise. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
