import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import { Image } from "@nextui-org/react";

export const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
      <div className="flex flex-row flex-wrap justify-center gap-12 md:gap-20 lg:gap-28">
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