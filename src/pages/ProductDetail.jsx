import { useState } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import { Image } from "@nextui-org/react";
import { House, Tag } from "@phosphor-icons/react";

export const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const productName = "This is a product name which has very long characters";

  const productImages = [
    {
      src: "https://placehold.co/500x500/17276e/white/png",
    },
    {
      src: "https://placehold.co/500x500/f67860/white/png",
    },
    {
      src: "https://placehold.co/500x500/660012/white/png",
    },
    {
      src: "https://placehold.co/500x500/00c895/white/png",
    },
    {
      src: "https://placehold.co/500x500/7e84ff/white/png",
    },
  ];

  return (
    <section className="mb-3 rounded-3xl bg-secondary-300 p-5 lg:px-10">
      <Breadcrumbs
        className="flex justify-end rounded-3xl text-accent-950"
        variant="solid"
        radius="lg"
        underline="hover"
        itemClasses={{
          base: "!text-accent-950",
          item: "!text-accent-950",
          separator: "!text-accent-950",
        }}
        classNames={{
          list: "bg-secondary-200",
        }}
      >
        <BreadcrumbItem href="/" startContent={<House />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="/products" startContent={<Tag />}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem>
          {productName.length > 40
            ? `${productName.slice(0, 40).trim()}...`
            : productName}
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex flex-row flex-wrap justify-center gap-12 p-4 md:gap-20 lg:gap-28">
        <div className="flex flex-col gap-[5px]">
          <Swiper
            zoom
            loop
            navigation
            spaceBetween={5}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs, Zoom]}
            className="w-72 rounded-3xl sm:w-80 md:w-96 lg:w-[28rem]"
          >
            {productImages.map((item, index) => (
              <SwiperSlide className="rounded-3xl" key={index}>
                <div className="swiper-zoom-container">
                  <Image
                    className="rounded-3xl"
                    src={item.src}
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            freeMode
            watchSlidesProgress
            spaceBetween={5}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-72 rounded-2xl sm:w-80 md:w-96 md:rounded-3xl lg:w-[28rem]"
          >
            {productImages.map((item, index) => (
              <SwiperSlide className="rounded-2xl md:rounded-3xl" key={index}>
                <Image className="rounded-2xl md:rounded-3xl" src={item.src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
