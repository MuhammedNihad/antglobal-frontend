import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

/**
 * Renders a carousel component.
 *
 * @return {ReactNode} The rendered carousel component.
 */
export const Carousel = () => {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      style={{
        "--swiper-pagination-color": "#fff",
      }}
      className="mb-3 rounded-3xl"
    >
      {/* TODO: Replace placeholder images */}
      <SwiperSlide>
        <img
          alt=""
          src="https://placehold.co/3200x800/png"
          srcSet="
          https://placehold.co/800x300/008f7a/white/png 800w,
          https://placehold.co/1600x400/008f7a/white/png 1600w,
          https://placehold.co/3200x800/008f7a/white/png 3200w"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt=""
          src="https://placehold.co/3200x800/png"
          srcSet="
          https://placehold.co/800x300/e83a7d/white/png 800w,
          https://placehold.co/1600x400/e83a7d/white/png 1600w,
          https://placehold.co/3200x800/e83a7d/white/png 3200w"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt=""
          src="https://placehold.co/3200x800/png"
          srcSet="
          https://placehold.co/800x300/d6bd1c/white/png 800w,
          https://placehold.co/1600x400/d6bd1c/white/png 1600w,
          https://placehold.co/3200x800/d6bd1c/white/png 3200w"
        />
      </SwiperSlide>
    </Swiper>
  );
};
