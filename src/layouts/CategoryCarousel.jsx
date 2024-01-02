import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

/**
 * Renders the Category component.
 *
 * @return {ReactNode} The rendered Category component.
 */
export const CategoryCarousel = () => {
  const categories = [
    {
      title: "Laptops",
      image: "https://placehold.co/150x150/d15d28/white/png",
      alt: "Alt text",
    },
    {
      title: "Tablets",
      image: "https://placehold.co/150x150/46128a/white/png",
      alt: "Alt text",
    },
    {
      title: "Bags",
      image: "https://placehold.co/150x150/0e7480/white/png",
      alt: "Alt text",
    },
    {
      title: "Cameras",
      image: "https://placehold.co/150x150/840fab/white/png",
      alt: "Alt text",
    },
    {
      title: "Sports",
      image: "https://placehold.co/150x150/a11645/white/png",
      alt: "Alt text",
    },
    {
      title: "Headphones",
      image: "https://placehold.co/150x150/1e159e/white/png",
      alt: "Alt text",
    },
    {
      title: "Speakers",
      image: "https://placehold.co/150x150/0f9166/white/png",
      alt: "Alt text",
    },
    {
      title: "Power Tools",
      image: "https://placehold.co/150x150/910f0f/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
    {
      title: "Gadgets",
      image: "https://placehold.co/150x150/944f0a/white/png",
      alt: "Alt text",
    },
  ];

  return (
    <section className="p-3 lg:px-10">
      <div className="flex flex-row p-3 rounded-3xl bg-accent-200 lg:px-10">
        <div className="flex items-center  w-[568px]-1/3 sm:w-1/4 md:w-1/3 lg:w-1/5">
          <h3 className="flex flex-col p-2 space-y-1 text-base font-bold leading-6 capitalize text-dark-600 md:p-4">
            <span>Browse</span>
            <span>by</span>
            <span>category</span>
          </h3>
        </div>
        {/* TODO: Add real categories from API with absolute url to category item detail page */}
        <Swiper
          // Default parameters
          slidesPerView={1}
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              // spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              // spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              // spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              // spaceBetween: 50,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 6,
              // spaceBetween: 10,
            },
            // when window width is >= 1536px
            1536: {
              slidesPerView: 7,
            },
            // when window width is >= 1920px
            1920: {
              slidesPerView: 8,
            },
            // when window width is >= 2560px
            2560: {
              slidesPerView: 9,
            },
          }}
          className="w-[568px]-2/3 sm:w-3/4 lg:w-4/5 md:w-2/3 xl:w-[120%] rounded-3xl"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={item.alt}
                height={150}
                width={150}
                className="object-cover h-36 w-36 rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};