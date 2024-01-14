import { ProductCard } from "../components/ProductCard";
import { ProductPagination } from "../components/ProductPagination";

export const ProductSection = () => {
  // TODO: replace placeholder images
  const products = [
    {
      name: "Asus Tuf A15 Gaming Laptop",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "Apple MacBook Pro M2",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "MacBook Air with M1 chip",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "iPad Pro with Liquid Retina XDR display",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "Mac mini with Apple M1 chip",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "Apple Watch Series 7 with Always-On Retina display",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "Apple TV 4K with A12 Bionic chip",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "Mac Pro with Apple Afterburner",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "iPhone 13 Pro Max (Graphite, 256GB)",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
    {
      name: "iPhone 12 mini (Blue, 64GB)",
      image: "https://picsum.photos/1000/1000",
      alt_text: "Alt text",
    },
  ];

  return (
    <section className="mb-3 gap-4 rounded-3xl bg-secondary-300 p-3 lg:px-10">
      <h3 className="flex items-center justify-center gap-1 space-y-1 p-4 text-4xl font-bold uppercase leading-8 text-accent-950 sm:text-5xl md:justify-end">
        Explore our products
      </h3>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            image={item.image}
            altText={item.alt_text}
          />
        ))}
      </div>
      <ProductPagination />
    </section>
  );
};
