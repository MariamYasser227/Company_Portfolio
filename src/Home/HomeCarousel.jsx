import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const slides = [
    {
      img: "/assets/download.jpg",
      title: "الرسالة",
      description: "تقديم خدمات شاملة ومتميزة في مجالات الرعاية...",
    },
    {
      img: "/assets/download.jpg",
      title: "نهدف الي دعم الأفراد في رحلتهم نحو تحقيق امكانياتهم الكاملة",
      description: "تسعى المنصة إلى تمكين الأفراد...",
    },
    {
      img: "/assets/download.jpg",
      title: "نخدمك أينما كنت كونك تستحق الحياة",
      description: "نمو الانسانية",
    },
    {
      img: "/assets/download.jpg",
      title: "اهدافنا",
      description:
        "تحقيق أهدافنا من خلال تقديم خدمات متميزة ودعم مستمر للأفراد.",
    },
    {
      img: "/assets/download.jpg",
      title: "القيم",
      description:
        "الاحترام، الشمولية، الابتكار، التعاون، والتميز في تقديم الخدمات.",
    },
    {
      img: "/assets/download.jpg",
      title: "الرؤية",
      description: "أن نكون الخيار الاول والرائد...",
    },
  ];

  return (
    <div
      className="relative w-full h-[50rem] overflow-hidden touch-pan-x"
      dir="ltr"
    >
      <Carousel
        className="h-full"
        loop={true}
        autoplay={true}
        interval={3000}
        transition={{ type: "tween", duration: 0.5 }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute z-40 flex gap-2 bottom-10 left-2/4 -translate-x-2/4">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-[#1a8650]" : "w-4 bg-gray-300"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="absolute inset-0 object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a8650]/20 to-transparent" />

            <div
              className="absolute inset-0 flex items-center justify-center text-right"
              dir="rtl"
            >
              <div className="container flex flex-col items-center max-w-4xl px-6 mx-auto text-center">
                {slide.title && (
                  <Typography
                    variant="h1"
                    className="mb-6 text-5xl font-bold text-white drop-shadow-md lg:text-7xl"
                  >
                    {slide.title}
                  </Typography>
                )}

                {slide.description && (
                  <Typography
                    variant="lead"
                    className="mb-10 text-xl font-medium leading-relaxed text-white opacity-95 md:text-2xl"
                  >
                    {slide.description}
                  </Typography>
                )}

                <Link to="/about">
                  <Button
                    size="lg"
                    className="relative overflow-hidden group bg-[#1a8650] text-white rounded-md px-5 py-3 text-xl font-bold shadow-lg transition-colors duration-300"
                  >
                    <span className="absolute inset-0 transition-transform duration-500 ease-in-out origin-center scale-x-0 bg-white group-hover:scale-x-100"></span>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a8650] group-hover:border-0">
                      اعرف المزيد
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
