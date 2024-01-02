import "./App.css";
import { Carousel } from "./layouts/Carousel";
import { NavigationBar } from "./layouts/NavigationBar";
import { CategoryCarousel } from "./layouts/CategoryCarousel";

function App() {
  return (
    <div className="m-3 lg:mx-10">
      <NavigationBar />
      <Carousel />
      <CategoryCarousel />
    </div>
  );
}

export default App;
