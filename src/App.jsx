import "./App.css";
import BestSellers from "./Components/BestSellers/BestSellers";
import Footer from "./Components/Footer/Footer";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Productswrapper from "./Components/Productswrapper/Productswrapper";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import Navbar from "./Components/Navbar/Navbar";
import Slideshow from './Components/Slideshow/Slideshow';

function App() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <ProductSlider />
      <BestSellers />
      <Productswrapper />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
