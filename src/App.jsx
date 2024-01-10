import "./App.css";
import { Carousel } from "./layouts/Carousel";
import { NavigationBar } from "./layouts/NavigationBar";
import { CategoryCarousel } from "./layouts/CategoryCarousel";
import { ProductSection } from "./layouts/ProductSection";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div className="m-3 lg:mx-10">
      <NavigationBar />
      <Carousel />
      <CategoryCarousel />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
