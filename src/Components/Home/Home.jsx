import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Productswrapper from "../Productswrapper/Productswrapper";
import BestSellers from "../BestSellers/BestSellers";
import ProductSlider from "../ProductSlider/ProductSlider";
import Slideshow from "../Slideshow/Slideshow";
import SpecialOffers from "../SpecialOffers/SpecialOffers";

export default function Home() {
  return (
    <>
    <div className="container mx-auto xl:px-50 px-10 ">
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
