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
    <section className="mb-3 flex flex-row gap-8 rounded-3xl bg-secondary-300 p-3 lg:px-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="flex flex-col space-y-1 text-lg font-bold uppercase leading-6 text-accent-950">
          <span>Browse</span>
          <span>by</span>
          <span>category</span>
        </h3>
        <div className="inline-flex gap-1">
          <button
            onClick={() => swiper.slidePrev()}
            className="swiper-button-prev group right-2 top-2 items-center rounded-3xl bg-white p-2 shadow-md hover:bg-accent-950"
          >
            <ArrowLeft
              size={20}
              alt="Previous button of categories"
              className="text-accent-950 group-hover:text-white"
            />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="swiper-button-next group right-2 top-2 items-center rounded-3xl bg-white p-2 shadow-md hover:bg-accent-950"
          >
            <ArrowRight
              size={20}
              alt="Next button of categories"
              className="text-accent-950 group-hover:text-white"
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
        slidesPerView={"auto"}
        spaceBetween={5}
        className="rounded-3xl"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index} className="w-fit">
            <div className="group relative h-36 w-36">
              <img
                src={item.image}
                alt={item.alt}
                height={150}
                width={150}
                className="h-36 w-36 rounded-3xl object-cover"
              />
              <div className="absolute right-2 top-2 inline-flex items-center rounded-3xl bg-white p-2 shadow-md group-hover:bg-accent-950">
                <ArrowUpRight
                  size={20}
                  alt="Arrow up icon on category item image"
                  className="text-accent-950 group-hover:text-white"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
