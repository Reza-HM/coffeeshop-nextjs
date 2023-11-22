import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Header = () => {
  return (
    <Swiper
      className="mySwiper after:contents-[''] after:absolute after:bg-[url('/img/overlay-bottom.png')] after:bottom-px after:w-full after:h-4 after:left-0 after:z-10"
      loop
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="bg-[url('/img/carousel-1.jpg')] bg-cover h-screen">
          <div className="text-center flex justify-center items-center h-screen flex-col gap-4 bg-[#33211db3]">
            <h3 className="text-[#da9f5b] text-3xl font-bold">
              We Have Been Serving
            </h3>
            <h1 className="text-white text-9xl font-bold">COFFEE</h1>
            <h4 className="text-white text-3xl font-bold">* SINCE 1950 *</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="bg-[url('/img/carousel-2.jpg')] bg-cover h-screen">
          <div className="text-center flex justify-center items-center h-screen flex-col gap-4 bg-[#33211db3]">
            <h3 className="text-[#da9f5b] text-3xl font-bold">
              We Have Been Serving
            </h3>
            <h1 className="text-white text-9xl font-bold">COFFEE</h1>
            <h4 className="text-white text-3xl font-bold">* SINCE 1950 *</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
