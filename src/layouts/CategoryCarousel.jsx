import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

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
  const swiper = useSwiper();

  return (
    <section className="flex flex-row gap-8 p-3 rounded-3xl bg-accent-200 lg:px-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="flex flex-col space-y-1 text-lg font-bold leading-6 capitalize text-dark-600">
          <span>Browse</span>
          <span>by</span>
          <span>category</span>
        </h3>
        <div className="inline-flex gap-1">
          <button
            onClick={() => swiper.slidePrev()}
            className="items-center p-2 bg-white shadow-md group rounded-3xl right-2 top-2 swiper-button-prev hover:bg-black"
          >
            <ArrowLeft
              size={20}
              alt="Previous button of categories"
              className="text-black group-hover:text-white"
            />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="items-center p-2 bg-white shadow-md group rounded-3xl right-2 top-2 swiper-button-next hover:bg-black"
          >
            <ArrowRight
              size={20}
              alt="Next button of categories"
              className="text-black group-hover:text-white"
            />
          </button>
        </div>
      </div>
      {/* TODO: Add real categories from API with absolute url to category item detail page */}
      <Swiper
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        // Default parameters
        slidesPerView={1}
        spaceBetween={5}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 6,
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
        className="rounded-3xl"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-36 w-36">
              <img
                src={item.image}
                alt={item.alt}
                height={150}
                width={150}
                className="object-cover h-36 w-36 rounded-3xl"
              />
              <div className="absolute inline-flex items-center p-2 bg-white shadow-md rounded-3xl right-2 top-2">
                <ArrowUpRight
                  size={20}
                  alt="Arrow up icon on category item image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
