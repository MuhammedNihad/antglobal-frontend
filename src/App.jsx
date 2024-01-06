import "./App.css";
import { Carousel } from "./layouts/Carousel";
import { NavigationBar } from "./layouts/NavigationBar";
import { CategoryCarousel } from "./layouts/CategoryCarousel";
import { ProductSection } from "./layouts/ProductSection";

function App() {
  return (
    <div className="m-3 lg:mx-10">
      <NavigationBar />
      <Carousel />
      <CategoryCarousel />
      <ProductSection />
    </div>
  );
}

export default App;
