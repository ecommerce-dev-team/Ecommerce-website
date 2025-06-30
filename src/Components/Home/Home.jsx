import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Productswrapper from '../Productswrapper/Productswrapper'
import BestSellers from '../BestSellers/BestSellers'
import ProductSlider from '../ProductSlider/ProductSlider'
import Slideshow from '../Slideshow/Slideshow'

export default function Home() {
  return <>

    <Slideshow/>
    <div className="mb-10"></div>
    <ProductSlider/>
    <BestSellers/>
    <div className="mb-12"></div>
    <Productswrapper/>
    <FeaturedProducts/>

    
  </>
}
