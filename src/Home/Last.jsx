import React, { useState, useEffect } from "react";
import { FaUserFriends, FaUserGraduate, FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Last = () => {
  const logos = [
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
    "/assets/logo.png",
  ];

  return (
    <div dir="rtl">
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex justify-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a8650] border-b-4 border-[#1a8650] pb-2">
              شركاؤنا
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="partners-slider"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center w-full h-32 p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
                  <img
                    src={logo}
                    alt={`Partner ${index}`}
                    className="object-contain max-w-full max-h-full transition-all duration-500 filter grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CSS ضروري للحركة الخطية المستمرة */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .partners-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </div>
  );
};

export default Last;
