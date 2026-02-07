import React, { useState } from "react";
import { IconButton, Button } from "@material-tailwind/react";
import { FiChevronRight, FiChevronLeft, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const activitiesData = [
  { id: 1, title: "كرة قدم", img: "/assets/photo.jpg" },
  { id: 2, title: "رحلات", img: "/assets/about.jpg" },
  { id: 3, title: "السباحة", img: "/assets/download.jpg" },
  { id: 4, title: "مسابقات", img: "/assets/about.jpg" },
];

const ActivitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const itemsToShow = 3;

  const handleNext = () => {
    if (currentIndex < activitiesData.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full px-4 py-10 mt-10" dir="rtl">
      <div className="flex items-center justify-between mx-auto mb-8 max-w-7xl">
        <h2 className="text-5xl font-bold text-[#1a8650] border-b-4 border-[#1a8650] pb-2">
          الفعاليات
        </h2>
        
        <Link to="/events">
        <Button
          className="relative overflow-hidden group transition-all duration-300 bg-[#1a8650] rounded-lg w-[8rem] h-[3.5rem] p-0 font-bold text-white shadow-none text-lg"
          size="lg"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <span className="absolute inset-0 transition-transform duration-500 ease-in-out origin-center scale-x-0 bg-[#073d22] group-hover:scale-x-100"></span>
            <span className="relative z-10 px-4 transition-colors duration-500 group-hover:text-white whitespace-nowrap">
              عرض الكل
            </span>
          </div>
        </Button>
        </Link>
      </div>

      <div className="relative mx-auto overflow-hidden max-w-7xl">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {activitiesData.map((item) => (
            <div key={item.id} className="min-w-[calc(33.333%-1rem)]">
              <ActivityCard
                title={item.title}
                img={item.img}
                onZoom={() => setSelectedImg(item.img)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`rounded-full text-white transition-all shadow-md ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#1a8650] hover:bg-[#146b40]"
          }`}
        >
          <FiChevronRight className="w-7 h-7" />
        </IconButton>

        <IconButton
          variant="text"
          size="lg"
          onClick={handleNext}
          disabled={currentIndex >= activitiesData.length - itemsToShow}
          className={`rounded-full text-white transition-all shadow-md ${
            currentIndex >= activitiesData.length - itemsToShow
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#1a8650] hover:bg-[#146b40]"
          }`}
        >
          <FiChevronLeft className="w-7 h-7" />
        </IconButton>
      </div>
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute text-4xl text-white top-5 right-5 hover:text-red-500">
            <FiX />
          </button>

          <img
            src={selectedImg}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-zoomIn"
            alt="Zoomed"
          />
        </div>
      )}
    </div>
  );
}

function ActivityCard({ title, img, onZoom }) {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-sm">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/30 group-hover:opacity-100"
          onClick={onZoom}
        >
          <div className="bg-[#1a8650] p-4 rounded-full shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <FiSearch className="text-white w-7 h-7" />
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-center text-[#333]">
        {title}
      </h3>
    </div>
  );
}

export default ActivitiesCarousel;
