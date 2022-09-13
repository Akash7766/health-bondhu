import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg from "../../assets/Ikbal 1.png";
import sliderPlus from "../../assets/sliderPlus.jpg";
import sliderDot from "../../assets/sliderDot.jpg";
import doctor from "../../assets/faq-doctor.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[80%] flex justify-center items-center rounded-3xl  bg-white overflow-hidden">
            <div className="p-6 flex gap-14">
              <div className="w-2/3 relative">
                <h3>David Jeams</h3>
                <h3 className="mt-3 mb-5">Pratient</h3>
                <p className="text-[#575757]">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content{" "}
                </p>
                <div className=" absolute">
                  <img src={sliderPlus} alt="" />
                </div>
              </div>
              <div className="w-1/3 relative">
                <div>
                  <img src={sliderImg} alt="" />
                </div>
                <div className=" absolute top-[-20px] right-[-20px]">
                  <img src={sliderDot} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] flex justify-center items-center rounded-3xl  bg-white overflow-hidden">
            <div className="p-6 flex gap-14">
              <div className="w-2/3 relative">
                <h3>David Jeams</h3>
                <h3 className="mt-3 mb-5">Pratient</h3>
                <p className="text-[#575757]">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content{" "}
                </p>
                <div className=" absolute">
                  <img src={sliderPlus} alt="" />
                </div>
              </div>
              <div className="w-1/3 relative">
                <div className="z-20">
                  {" "}
                  <img src={doctor} alt="" />
                </div>
                <div className=" absolute top-[-40px] right-[-40px] z-0">
                  <img src={sliderDot} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
