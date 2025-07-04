import React, { useContext } from "react";
import { AllCategoriesContext } from "../../Context/AllCategoriesProvider";

const SideBarCategories = () => {
  const { allCategories, setSelectedCategory } =
    useContext(AllCategoriesContext);
  return (
    <div className="allCatgeories text-[#71778E] flex flex-col gap-1">
      <h1 className="font-semibold text-[#202435] mb-3 text-sm sm:text-base">
        PRODUCT CATEGORIES
      </h1>
      {allCategories.map((item) => (
        <div
          key={item._id}
          onClick={() => setSelectedCategory(item._id)}
          className="flex items-center"
        >
          <input
            type="radio"
            id={`category_id${item._id}`}
            className="accent-blue-700 w-4 h-4"
            name="drone"
            value="huey"
          />
          <label
            htmlFor={`category_id${item._id}`}
            className="ml-3 text-sm sm:text-base"
          >
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SideBarCategories;
