import React from "react";
import { useEffect } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import Swiper JS
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroImage from "../HeroImage/HeroImage";

function Carousel({ AlbumCards, getCardComponent }) {
  return (
    <>
      <Swiper
        initialSlide={0}
        modules={Navigation}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove={true}
      >
        {AlbumCards?.map((item) => {
          return (
            <SwiperSlide key={item.id}>{getCardComponent(item)}</SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
