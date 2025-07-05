import React, { useContext } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Productswrapper from "../Productswrapper/Productswrapper";
import BestSellers from "../BestSellers/BestSellers";
import ProductSlider from "../ProductSlider/ProductSlider";
import Slideshow from "../Slideshow/Slideshow";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const {Token}=useContext(AuthContext);
 
   useEffect(() => {
  if (Token !== null) {
    localStorage.setItem("token", Token);
  }
}, [Token]);

  return (
    <>

    <div className="container mx-auto lg:px-40  px-10 ">

      <Slideshow />
      <SpecialOffers/>
      <ProductSlider />
      <BestSellers />
      <div className="mb-12"></div>
      <Productswrapper />
      <FeaturedProducts />
    </div>
    </>
  );
}
