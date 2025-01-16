import { PiggyBankIcon } from "lucide-react";

const ContentTile = () => {
  return (
    <div className="flex  justify-between items-center mx-3">
      {/* <PiggyBankIcon className="h-[60px] w-full" /> */}
      <div className="flex w-[32%]">
        <PiggyBankIcon className="h-[60px] w-full text-secondary" />
        <div>
          <h3 className="text-2xl font-bold">Smart Budgeting!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perspiciatis tenetur recusandae, ex iusto eaque! Quasi similique
            est, repellendus beatae molestiae sed quae! Corrupti numquam
            quisquam magnam fugiat soluta consequatur!
          </p>
        </div>
      </div>
      <div className="flex w-[32%]">
        <PiggyBankIcon className="h-[60px] w-full text-secondary" />
        <div>
          <h3 className="text-2xl font-bold">Smart Budgeting!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perspiciatis tenetur recusandae, ex iusto eaque! Quasi similique
            est, repellendus beatae molestiae sed quae! Corrupti numquam
            quisquam magnam fugiat soluta consequatur!
          </p>
        </div>
      </div>
      <div className="flex   w-[32%]">
        <PiggyBankIcon className="h-[60px] w-full text-secondary" />
        <div>
          <h3 className="text-2xl font-bold">Smart Budgeting!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perspiciatis tenetur recusandae, ex iusto eaque! Quasi similique
            est, repellendus beatae molestiae sed quae! Corrupti numquam
            quisquam magnam fugiat soluta consequatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentTile;
