"use client";
import { Box } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SellingProductCard from "../../card/SellingProductCard";
export default function SellingProductSlider({ data }) {
  return (
    <Box>
      <Swiper
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation, Pagination]}
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
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <SellingProductCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box bgcolor={""} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            marginTop: 5,
            marginRight: 1,
          }}
        >
          <Box
            className="swiper-button-prev"
            sx={{
              top: "unset",
              left: "unset",
              bottom: "unset",
              right: "unset",
              position: "unset",
              fontSize: "10px",
              backgroundColor: "#ffff",
              height: "20px",
              width: "20px",
              padding: 2,
              borderRadius: "50%",
              color: "text.primary",
              "&::after": {
                fontSize: 15,
              },
            }}
          ></Box>
          <Box
            className="swiper-button-next"
            sx={{
              top: "unset",
              left: "unset",
              bottom: "unset",
              right: "unset",
              position: "unset",
              backgroundColor: "#ffff",
              height: "20px",
              width: "20px",
              padding: 2,
              borderRadius: "50%",
              color: "text.primary",
              "&::after": {
                fontSize: 15,
              },
            }}
          >
            l
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
