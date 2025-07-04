import React, { useContext } from "react";
import { AllProductsContext } from "../Context/AllProductsProvider";
import ProductRating from "../CartPage/ProductRating";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import mainImg from "../images/cartimg.png";
import { AllCategoriesContext } from "../Context/AllCategoriesProvider";
import { BrandsContext } from "../Context/BrandsProvider";

const AllProductsShop = ({ hide, setHide }) => {
  const {
    products,
    metadata,
    currentPage,
    setCurrentPage,
    loading,
    fullResponseProducts,
  } = useContext(AllProductsContext);
  const { selectedCategory } = useContext(AllCategoriesContext);
  const { addToCart } = useContext(CartContext);
  const { brands, selectedBrandId } = useContext(BrandsContext);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (metadata?.numberOfPages && currentPage < metadata.numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const sortedItems = [...products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const displayedItemsCategories = selectedCategory
    ? sortedItems.filter((item) => item.category._id === selectedCategory)
    : sortedItems;
  const finalDisplayedBrand = selectedBrandId
    ? displayedItemsCategories.filter(
        (item) => item.brand._id === selectedBrandId
      )
    : displayedItemsCategories;
  return (
    <div className="w-full flex flex-col">
      <img src={mainImg} alt="shop image" className="w-full" />

      <div className="bg-[#F7F8FD] h-14 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 p-4 sm:p-7 text-[#9B9BB4] mb-4 mt-4">
        <div className="whitespace-nowrap text-sm sm:text-base">
          {fullResponseProducts.results != 1 ? (
            <span>{fullResponseProducts.results} products</span>
          ) : (
            <span>{fullResponseProducts.results} product</span>
          )}
        </div>
        <div className="whitespace-nowrap text-sm sm:text-base">
          Sort by: <span className="text-black">Alphabetically, A-Z</span>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4">
          {!hide &&
            finalDisplayedBrand.map((item) => (
              <div
                key={item._id}
                className="border border-[#EDEEF5] w-full max-w-[213px] h-[540px] flex flex-col justify-center items-start gap-1.5 rounded-[8px] py-6 px-5"
              >
                <NavLink to={`/productDetails/${item._id}`}>
                  <img
                    src={item.imageCover}
                    alt="product img"
                    className="w-[130px] m-auto"
                  />
                </NavLink>
                <p className="font-[500] text-[#202435] text-sm sm:text-base">
                  {item.title}
                </p>
                <p
                  className={`text-[#00B853] font-[500] text-sm sm:text-base ${
                    !item.quantity ? "line-through text-red-700" : ""
                  }`}
                >
                  IN STOCK
                </p>
                <div className="flex justify-center items-center gap-1">
                  <ProductRating averageRating={item.ratingsAverage} />
                  <p className="text-[#71778E] text-sm">reviews</p>
                </div>
                <p className="text-[#D51243] font-bold text-[16px] sm:text-[18px] tracking-tight">
                  ${item.price}
                </p>
                <button
                  onClick={() => addToCart(item._id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-4 rounded-full text-sm flex justify-center items-center w-full"
                >
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2 sm:gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded disabled:opacity-50 text-sm sm:text-base"
        >
          Previous
        </button>
        <span className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-medium">
          Page {currentPage} of {metadata?.numberOfPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === metadata?.numberOfPages}
          className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded disabled:opacity-50 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProductsShop;
