import "./App.css";
import { Carousel } from "./layouts/Carousel";
import { NavigationBar } from "./layouts/NavigationBar";
import { CategoryCarousel } from "./layouts/CategoryCarousel";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="p-3 lg:px-10">
        <Carousel />
      </div>
      <CategoryCarousel />
    </>
  );
}

export default App;
