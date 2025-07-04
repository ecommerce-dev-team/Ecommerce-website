import React, { useContext, useState } from "react";
import { AllProductsContext } from "../../Context/AllProductsProvider";

const SideAvailability = ({ hide, sethide }) => {
  const { products } = useContext(AllProductsContext);

  const numInStock = products.filter((item) => {
    return item.quantity != 0;
  });

  const numOutStock = products.filter((item) => {
    return item.quantity === 0;
  });

  return (
    <div className="mt-6 md:mt-13">
      <h1 className="font-semibold text-[#202435] mb-3 text-sm sm:text-base">
        AVAILABILITY
      </h1>
      <div className="flex justify-between items-center text-[#71778E] mb-2">
        <div className="whitespace-nowrap flex items-center">
          <input
            type="radio"
            name="stock"
            id="instock"
            checked={!hide}
            onChange={() => sethide(false)}
            className="w-4 h-4"
          />
          <label htmlFor="instock" className="ml-3 text-sm sm:text-base">
            In stock
          </label>
        </div>
        <p className="text-sm sm:text-base">({numInStock.length})</p>
      </div>
      <div className="flex justify-between items-center text-[#71778E]">
        <div className="whitespace-nowrap flex items-center">
          <input
            type="radio"
            name="stock"
            id="outstock"
            checked={hide}
            onChange={() => sethide(true)}
            className="w-4 h-4"
          />
          <label htmlFor="outstock" className="ml-3 text-sm sm:text-base">
            Out of stock
          </label>
        </div>
        <p className="ml-2 text-sm sm:text-base">({numOutStock.length})</p>
      </div>
    </div>
  );
};

export default SideAvailability;
