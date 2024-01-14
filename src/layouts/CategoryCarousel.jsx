import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
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
    <section className="mb-3 rounded-3xl bg-secondary-300 p-5 lg:px-10">
      <div className="flex flex-row items-center justify-end gap-3 pb-3">
        <h3 className="flex flex-col flex-wrap space-y-1 text-4xl font-bold uppercase leading-8 text-accent-950 sm:text-5xl">
          Browse by category
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
            <Card
              className="w-36 rounded-3xl"
              shadow="none"
              isPressable
              key={index}
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="group relative overflow-visible rounded-3xl p-0">
                <Image
                  className="h-36 w-36 rounded-3xl object-cover"
                  alt={item.alt}
                  src={item.image}
                />
                <div className="absolute right-2 top-2 z-10 inline-flex items-center rounded-3xl bg-white p-2 shadow-md group-hover:bg-accent-950">
                  <ArrowUpRight
                    size={20}
                    alt="Arrow up icon on category item image"
                    className="text-accent-950 group-hover:text-white"
                  />
                </div>
              </CardBody>
              <CardFooter className="justify-start text-small">
                <b className="line-clamp-1 text-accent-950">{item.title}</b>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
