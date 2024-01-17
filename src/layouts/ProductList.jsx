import { ProductCard } from "../components/ProductCard";

export const ProductList = () => {
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
    <section className="mb-3 rounded-3xl bg-secondary-300 p-5 lg:px-10">
      <h3 className="flex items-center justify-center gap-3 space-y-1 p-4 text-4xl font-bold uppercase leading-8 text-accent-950 sm:text-5xl md:justify-end">
        Explore our products
        <svg
          className="w-20 sm:w-8 md:w-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
        >
          <path
            fill="rgba(23, 39, 110, 1)"
            fillRule="evenodd"
            d="M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0Z"
            clipRule="evenodd"
          ></path>
        </svg>
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
    </section>
  );
};
