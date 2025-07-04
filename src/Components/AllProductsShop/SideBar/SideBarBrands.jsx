import React, { useContext } from "react";
import { BrandsContext } from "../../Context/BrandsProvider";

const SideBarBrands = () => {
  const { brands, selectedBrandId, setSelectedBrandId } =
    useContext(BrandsContext);
  return (
    <div className="allBrands text-[#71778E] flex flex-col gap-1 mt-6 md:mt-14">
      <h1 className="font-semibold text-[#202435] mb-3 text-sm sm:text-base">
        BRANDS
      </h1>
      {brands.map((item) => (
        <div
          key={item._id}
          onClick={() => setSelectedBrandId(item._id)}
          className="flex items-center"
        >
          <input
            type="radio"
            id={`brand_id${item._id}`}
            className="accent-blue-700 w-4 h-4"
            name="brand"
          />
          <label
            htmlFor={`brand_id${item._id}`}
            className="ml-3 text-sm sm:text-base"
          >
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SideBarBrands;
