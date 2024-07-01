"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NewProductCard from "../../card/NewProductCard";
export default function NewProductSlider({ data }) {
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={item._id}>
          <NewProductCard data={item} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
