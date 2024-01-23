import { Carousel } from "../layouts/Carousel";
import { CategoryCarousel } from "../layouts/CategoryCarousel";
import { ProductSection } from "../layouts/ProductSection";

export const Home = () => {
  return (
    <>
      <Carousel />
      <CategoryCarousel />
      <ProductSection />
    </>
  );
};
