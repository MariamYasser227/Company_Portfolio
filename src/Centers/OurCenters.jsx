import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import { FaHandsHelping } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";

const OurCenters = () => {
  const specializations = [
    { title: "التخاطب", icon: <FaHandsHelping /> },
    { title: "صعوبة التعلم", icon: <FaBookReader /> },
    { title: "التعليم الأكاديمي", icon: <GiGraduateCap /> },
    { title: "التعليم الأكاديمي", icon: <HiAcademicCap /> },
    { title: "العلاج الوظيفي", icon: <PiBagSimpleFill /> },
    { title: "العلاج الطبيعي", icon: <FaPerson /> },
  ];

  const branches = [
    {
      name: "مركز التمكين الشامل ",
      phone: "+966",
      color: "border-red-500",
      topColor: "bg-red-500",
    },
    {
      name: "التمكين الشامل ",
      phone: "+966",
      color: "border-cyan-600",
      topColor: "bg-cyan-600",
    },
    {
      name: "التمكين الشامل ",
      phone: "+966",
      color: "border-red-500",
      topColor: "bg-red-500",
    },
    {
      name: "التمكين الشامل ",
      phone: "+966",
      color: "border-cyan-600",
      topColor: "bg-cyan-600",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="مراكزنا" currentPath="/centers" />

      <div className="max-w-6xl px-4 mx-auto mt-16 text-center" dir="rtl">
        <div className="inline-block pb-2 mb-16 border-b-4 border-green-900">
          <h2 className="text-4xl font-bold text-green-900">تخصصات مراكزنا</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-12 rounded-[2rem] transition-all duration-300 bg-gray-50 text-green-900 hover:bg-green-800 hover:text-white hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute flex items-center justify-center w-20 h-20 text-4xl text-green-900 transition-all duration-300 bg-white border border-gray-100 rounded-full shadow-md -top-10 group-hover:bg-green-800 group-hover:text-white group-hover:border-white">
                {item.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="inline-block pb-2 mt-24 mb-16 border-b-4 border-green-900">
          <h2 className="text-4xl font-bold text-green-900">فروع مراكزنا</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-sm p-6 flex flex-col items-center transition-transform hover:scale-105 ${branch.color}`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 ${branch.topColor}`}
              ></div>
              <div className="w-32 h-32 mb-4">
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h4 className="flex items-center h-20 mb-4 text-lg font-bold text-gray-800">
                {branch.name}
              </h4>
              <p className="text-xl font-bold text-gray-700" dir="ltr">
                {branch.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurCenters;
