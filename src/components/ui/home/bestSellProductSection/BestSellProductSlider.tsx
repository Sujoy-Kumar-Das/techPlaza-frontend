"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../card/ProductCard";
export default function BestSellProductSlider({ data }) {
  return (
    <Swiper
      autoplay={{
        pauseOnMouseEnter: true,
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item._id}>
          <ProductCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
