import React, { useState } from "react";
import PageHeader from "../component/Layout/PageHeader";
import { FiX, FiSearch } from "react-icons/fi";

const activitiesData = [
  { id: 1, title: "كرة قدم", img: "/assets/photo.jpg" },
  { id: 2, title: "رحلات", img: "/assets/about.jpg" },
  { id: 3, title: "السباحة", img: "/assets/download.jpg" },
  { id: 4, title: "مسابقات", img: "/assets/about.jpg" },
];

const Activities = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="الفعاليات" currentPath="/events" />

      <div className="px-4 mx-auto mt-16 max-w-7xl" dir="rtl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {activitiesData.map((item) => (
            <ActivityCard
              key={item.id}
              title={item.title}
              img={item.img}
              onZoom={() => setSelectedImg(item.img)}
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute text-4xl text-white transition-colors top-8 right-8 hover:text-red-500">
            <FiX />
          </button>

          <img
            src={selectedImg}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl scale-100 animate-in zoom-in-95 duration-300"
            alt="Zoomed"
          />
        </div>
      )}
    </main>
  );
};

function ActivityCard({ title, img, onZoom }) {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-md bg-gray-100">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-black/40 group-hover:opacity-100"
          onClick={onZoom}
        >
          <div className="bg-[#1a8650] p-4 rounded-full shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <FiSearch className="text-white w-7 h-7" />
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-center text-gray-800 group-hover:text-[#1a8650] transition-colors">
        {title}
      </h3>
    </div>
  );
}

export default Activities;
