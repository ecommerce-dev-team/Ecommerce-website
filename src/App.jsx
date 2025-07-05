import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AllProductsShop from "./Components/AllProductsShop/AllProductsShop.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import { AuthContextProvider } from "./Components/Context/AuthContext.jsx";
import Guard from "./Components/Guard/Guard.jsx";
import Shopcontextprovider from "./Components/Context/Context.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import CartProvider from "./Components/Context/CartProvider.jsx";
import AllCategoriesProvider from "./Components/Context/AllCategoriesProvider.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import AllProductsProvider from "./Components/Context/AllProductsProvider.jsx";
import WholeMainShopPage from "./Components/AllProductsShop/WholeMainShopPage.jsx";
import BrandsProvider from "./Components/Context/BrandsProvider.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import WishListProvider from "./Components/Context/WishlistContext.jsx";
import WishList from "./Components/Wishlist/Wishlist.jsx";
import About from "./Components/About/About.jsx"
import CheckOut from "./Components/Checkout/CheckOut.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AllProductsProvider>
        <BrandsProvider>
          <AllCategoriesProvider>
            <CartProvider>
              <WishListProvider>
                <Shopcontextprovider>
                  <Layout />
                </Shopcontextprovider>
              </WishListProvider>
            </CartProvider>
          </AllCategoriesProvider>
        </BrandsProvider>
      </AllProductsProvider>
    ),
    children: [
      { path: "", element: <Register /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "About_Us", element: <About /> },
      
      {
        /* protected paths */
      },
      {
        path: "HOME",
        element: (
          <Guard>
            {" "}
            <Home />{" "}
          </Guard>
        ),
      },
      {
        path: "Compare",
        element: (
          <Guard>
            {" "}
            {" "}
          </Guard>
        ),
      },
      {
        path: "Wishlist",
        element: (
          <Guard>
            {" "}
            <WishList />{" "}
          </Guard>
        ),
      },
      {
        path: "contactUs",
        element: (
          <Guard>
            {" "}
            <ContactUs />{" "}
          </Guard>
        ),
      },
      {
        path: "shop",
        element: (
          <Guard>
            {" "}
            <WholeMainShopPage />{" "}
          </Guard>
        ),
      },
      {
        path: "cart",
        element: (
          <Guard>
            {" "}
            <CartPage />{" "}
          </Guard>
        ),
      },
      {
        path: "productDetails/:id",
        element: (
          <Guard>
            {" "}
            <ProductDetails />{" "}
          </Guard>
        ),
      },
      {
        path: "check-out",
        element: (
          <Guard>
          <CheckOut/>
            {" "}
          {" "}
          </Guard>
        ),
      },
      {
        path: "BAKERY",
        element: (
          <Guard>
            {" "}
          {" "}
          </Guard>
        ),
      },
      {
        path: "BEVERAGES",
        element: (
          <Guard>
            {" "}
            {" "}
          </Guard>
        ),
      },
      {
        path: "BLOG",
        element: (
          <Guard>
            {" "}
            <Blog />{" "}
          </Guard>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div class="text-center">
                <p class="text-5xl font-bold text-indigo-600">404</p>
                <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Page not found
                </h1>
                <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
              </div>
            </main>
          </>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <AuthContextProvider>

        <RouterProvider router={Router} />

      </AuthContextProvider>
    </>
  );
}
