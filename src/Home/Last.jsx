import React, { useState, useEffect } from "react";
import { FaUserFriends, FaUserGraduate, FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const StatItem = ({ targetNumber, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / 200;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 15);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center text-white">
      <div className="mb-4 text-4xl">
        <Icon />
      </div>
      <div className="mb-2 text-5xl font-bold">+{count.toLocaleString()}</div>
      <div className="text-xl font-medium">{label}</div>
    </div>
  );
};

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
      <section className="relative flex min-h-[30rem] w-full flex-col items-center justify-center overflow-hidden bg-[#0a3633] px-6 py-12 text-center">
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(/assets/photo.jpg)`,
            backgroundColor: "rgba(10, 54, 51, 0.9)",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-6xl">
          <h2 className="mb-20 text-5xl font-bold tracking-wide text-white">
            إحصائيات المراكز
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <StatItem
              icon={FaUserFriends}
              targetNumber={750}
              label="موظف وموظفة"
            />
            <StatItem
              icon={FaUserGraduate}
              targetNumber={1820}
              label="طالب وطالبة"
            />
            <StatItem icon={FaBuilding} targetNumber={30} label="مركز" />
          </div>
        </div>
      </section>

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
