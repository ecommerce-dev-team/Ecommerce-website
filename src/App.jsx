import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import BestSellers from "./Components/BestSellers/BestSellers";
import Footer from "./Components/Footer/Footer";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Productswrapper from "./Components/Productswrapper/Productswrapper";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";

const queryClient = new QueryClient(); // خليها برة علشان ما تتكرر في كل render

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductSlider />
      <BestSellers />
      <Productswrapper />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
