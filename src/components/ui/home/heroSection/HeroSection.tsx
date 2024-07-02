"use client";
import { Container } from "@mui/material";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSliderCard from "./HomeSliderCard";

export default function HeroSection({ data }) {
  const [swiper, setSwiper] = useState(0);

  // Function for handle Swiper current index
  const handleSwiperInit = (swiper: any) => {
    setSwiper(swiper.activeIndex);

    swiper.on("slideChange", () => {
      setSwiper(swiper.activeIndex);
    });
  };
  return (
    <Container>
      <Swiper
        onSwiper={handleSwiperInit}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={item._id}>
            <HomeSliderCard item={item} sliderIndex={swiper} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
