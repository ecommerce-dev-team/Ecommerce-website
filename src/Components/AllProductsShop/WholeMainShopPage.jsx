import { NavLink } from "react-router-dom";
import AllProductsShop from "./AllProductsShop";
import { IoIosArrowForward } from "react-icons/io";
import SideBar from "./SideBar/SideBar.jsx";
import { useState, useEffect } from "react";

const WholeMainShopPage = () => {
  const [hide, sethide] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ml-4 md:ml-7">
      <div className="flex items-center justify-between">
        <NavLink to="/home" className="text-sm md:text-base">
          <span className="font-[600]">Home</span>{" "}
          <IoIosArrowForward className="inline" />
        </NavLink>
        {isMobile && (
          <button
            className="md:hidden bg-gray-200 px-3 py-1 rounded"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
        {(!isMobile || showSidebar) && (
          <SideBar hide={hide} sethide={sethide} />
        )}
        <AllProductsShop hide={hide} sethide={sethide} />
      </div>
    </div>
  );
};

export default WholeMainShopPage;
