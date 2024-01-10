import "./App.css";
import { Carousel } from "./layouts/Carousel";
import { NavigationBar } from "./layouts/NavigationBar";
import { CategoryCarousel } from "./layouts/CategoryCarousel";
import { ProductSection } from "./layouts/ProductSection";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div className="bg-primary-50 p-3 lg:px-10">
      <NavigationBar />
      <Carousel />
      <CategoryCarousel />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
