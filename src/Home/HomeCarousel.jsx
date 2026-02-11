import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const slides = [
    {
      img: "/assets/download.png",
      title: "من نحن",
      path: "/about",
    },
    {
      img: "/assets/download.png",
      title: "رؤيتنا",
      path: "/vision",
    },
    {
      img: "/assets/download.png",
      title: "رسالتنا",
      path: "/mission",
    },
    {
      img: "/assets/download.png",
      title: "قيمنا المؤسسية",
      path: "/values",
    },
    {
      img: "/assets/download.png",
      title: "اهداف المركز",
      path: "/goals",
    },
    {
      img: "/assets/download.png",
      title: "الفئات المستفيدة",
      path: "/beneficiaries",
    },
    {
      img: "/assets/download.png",
      title: "منهجية التأهيل و الدعم",
      path: "/methodology",
    },{
      img: "/assets/download.png",
      title: "نطاق الخدمات التأهيلية",
      path: "/services",
    },{
      img: "/assets/download.png",
      title: "سياسة الجودة و التحسين المستمر",
      path: "/quality",
    },{
      img: "/assets/download.png",
      title: "الالتزام النظامي و الاخلاقي",
      path: "/compliance",
    },
    {
      img: "/assets/download.png",
      title: "سياسة الخصوصية و حماية البيانات",
      path: "/privacy",
    },
    {
      img: "/assets/download.png",
      title: "سياسة حقوق المستفيدين و السلامة و ادارة المخاطر",
      path: "/rights",
    },
    {
      img: "/assets/download.png",
      title: "فريق العمل",
      path: "/team",
    },
    {
      img: "/assets/download.png",
      title: "لماذا يدك معنا؟",
      path: "/why-us",
    },{
      img: "/assets/download.png",
      title: "الاسئلة الشائعة",
      path: "/faq",
    },
    {
      img: "/assets/download.png",
      title: "تواصل معنا",
      path: "/contact",
    },
    
    
  ];

  return (
    <div
      className="relative w-full h-[46rem] overflow-hidden touch-pan-x"
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
              className="absolute inset-0 object-cover w-full h-full "
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
                    className="mb-6 text-5xl font-bold text-white drop-shadow-md lg:text-7xl "
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

                <Link to={slide.path}>
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
