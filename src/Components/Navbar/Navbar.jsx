import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

import logo from "../images/1b3a39f294097ea26db9e58cebfe4b47 1.png";
import Border from "../images/Border.png";
import back from "../images/Background.png";
import Icon from "../images/Icon.png";
import Meat from "../images/Icon (1).png";
import Bakery from "../images/Vector.png";
import Beverages from "../images/Icon (1).png";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { response } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [isOpen, setIsOpen] = useState(false);
  const { Token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/register");
  }

  useEffect(() => {
    document.documentElement.dir = language === "Arabic" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => setSearchResults(data.products))
          .catch((err) => console.error(err));
      } else {
        setSearchResults([]);
      }
    }, 400);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);
  const location = useLocation();

  if (location.pathname === "login" || location.pathname === "register") {
    return null;
  }

  function getCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['categoryList'],
    queryFn: getCategories,
  });

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const categories = data?.data?.data || [];

  return (
    <>
      {Token ? (
        <div className="w-full">
          <div className="bg-teal-600 text-white text-xs sm:text-sm py-2 text-center px-2">
            Due to current circumstances, there may be slight delays in order
            processing
          </div>

        <div>

          <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 border-b gap-4">
            <div className="flex justify-between items-center w-full sm:w-auto text-sm text-gray-600">
              <div className="hidden font-inter sm:flex gap-4">
                <Link to="About_Us">About Us</Link>
                <Link to="Compare">Compare</Link>
                <Link to="Wishlist">Wishlist</Link>
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden text-xl text-teal-600 ml-auto"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600 text-center mx-auto">
              <div className="flex items-center gap-2">
                <img src={Icon} alt="icon" className="w-5 font-inter h-5" />
                100% Secure delivery without contacting the courier
              </div>
              <div>
                Need help? Call Us:{" "}
                <span className="text-teal-600 font-semibold">+0020 500</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 text-sm text-gray-600 ml-auto">
              <select
                className="border p-1 rounded text-xs sm:text-sm"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>Arabic</option>
              </select>
              <select
                className="border p-1 rounded text-xs sm:text-sm"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option>USD</option>
                <option>EGP</option>
              </select>

              <Link onClick={logOut}>Logout</Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10" />
              <div>
                <h2 className="text-xl font-bold text-teal-600">Basket</h2>
                <p className="text-xs text-gray-500 -mt-1">
                  Online Grocery Shopping Center
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 relative order-last sm:order-none">
              <input
                type="text"
                placeholder="Search for Products..."
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 mt-1 rounded max-h-60 overflow-y-auto">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link onClick={logOut} to="/login">
                <img
                  src={Border}
                  alt="login"
                  className="w-10 h-10 cursor-pointer"
                />
              </Link>
              <span className="text-gray-800 font-semibold">
                {currency === "USD"
                  ? `${response?.data?.totalCartPrice}$`
                  : `${response?.data?.totalCartPrice} جنيه`}
              </span>
              <div className="relative">
                <Link to="/cart">
                  <img
                    src={back}
                    alt="cart"
                    className="w-10 h-10 cursor-pointer"
                  />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {response.numOfCartItems}
                </span>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-3 border-t text-sm font-medium text-gray-700">
          <div className="flex">
      <div className="relative">
      {/* Button */}
      <button
        className="flex items-center gap-1 bg-teal-600 text-white px-6 py-3 rounded-full"
        onClick={toggleDropdown}
      >
        <FaBars />
        <span className="font-[Dosis] sm:inline">ALL CATEGORIES</span>
        <svg className="w-3 h-3 fill-white " viewBox="0 0 10 6">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      <span className="text-[#71778E] bg-[#EDEEF5] border-white border px-2 py-1 rounded-full text-[10px] absolute bottom-[-10px] left-10 ">TOTAL 50 PRODUCTS</span>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-10">
          <ul className="py-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category._id}
                  className="px-4 py-2 text-gray-800 hover:bg-teal-100 cursor-pointer"
                >
                  {category.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No categories found</li>
            )}
          </ul>
        </div>
      )}
    </div>

              <div className="hidden font-[Dosis] lg:text-xl md:flex gap-6 items-center ml-10">
                <NavLink
                  to="HOME"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  <div className="flex justify-center items-center">
                    <span>HOME</span>
                    <svg
                      className="w-3 h-3 inline-block ml-1 -mt-0.5"
                      viewBox="0 0 10 6"
                    >
                      <path d="M1 1l4 4 4-4" fill="currentColor" />
                    </svg>
                  </div>
                </NavLink>
                <NavLink
                  to="shop"
                  className="hover:text-teal-500 transition"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  SHOP
                </NavLink>
                <NavLink
                  to="MEATS_SEAFOOD"
                  className="hover:text-teal-500 transition flex items-center gap-1"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  <img src={Meat} alt="meat" className="w-4 h-4" />
                  MEATS & SEAFOOD
                </NavLink>
                <NavLink
                  to="BAKERY"
                  className="hover:text-teal-500 transition flex items-center gap-1"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  <img src={Bakery} alt="bakery" className="w-4 h-4" />
                  BAKERY
                </NavLink>
                <NavLink
                  to="BEVERAGES"
                  className="hover:text-teal-500 transition flex items-center gap-1"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  <img src={Beverages} alt="beverages" className="w-4 h-4" />
                  BEVERAGES
                </NavLink>
                <NavLink
                  to="BLOG"
                  className="hover:text-teal-500 transition"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  BLOG
                </NavLink>
                <NavLink
                  to="contactUs"
                  className="hover:text-teal-500 transition"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: "#f0fdfa",
                          color: "#14b8a6",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3 text-teal-700 px-4">
              <Link to="/home">HOME</Link>
              <Link to="/About_Us">About Us</Link>
              <Link to="/Compare">Compare</Link>
              <Link to="/Wishlist">Wishlist</Link>
              <Link to="/shop">SHOP</Link>
              <Link to="/MEATS_SEAFOOD">MEATS & SEAFOOD</Link>
              <Link to="/BAKERY">BAKERY</Link>
              <Link to="/BEVERAGES">BEVERAGES</Link>
              <Link to="/BLOG">BLOG</Link>
              <Link to="contactUs">CONTACT</Link>
            </div>
          )}
         </div>
        </div>
      ) : (
        <>
          <div className="w-full">
            <div className="bg-teal-600 text-white text-xs sm:text-sm py-2 text-center px-2">
              Due to current circumstances, there may be slight delays in order
              processing
            </div>

            <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 border-b gap-4">
              <div className="flex justify-between items-center w-full sm:w-auto text-sm text-gray-600">
                <div className="hidden font-inter sm:flex gap-4">
                  <Link to="About_Us">About Us</Link>
                </div>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="sm:hidden text-xl text-teal-600 ml-auto"
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 text-sm text-gray-600 ml-auto">
                <Link
                  className="text-black-600 text-lg font-semibold transition-transform duration-300 hover:scale-110 hover:text-green-600"
                  to="login"
                >
                  Login
                </Link>
                <Link
                  className="text-black-600 text-lg font-semibold transition-transform duration-300 hover:scale-110 hover:text-green-600"
                  to="register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
