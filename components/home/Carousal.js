import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-full mb-10 sm:mb-20 p-2"
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/01.png"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/02.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/03.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/04.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/05.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/06.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/07.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/08.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/09.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/10.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/11.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/12.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/13.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/14.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/15.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/16.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/17.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/18.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/19.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
    </Swiper>
  );
}
