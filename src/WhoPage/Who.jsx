import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Who = () => {
  const points = [
    "تشخيص وتقييم حالات ذوي الإعاقة من بداية التحاقهم بالمراكز لتصنيف إعاقتهم ووضع البرامج اللازمة لهم.",
    "تدريب وتعليم وتأهيل ذوي الإعاقة داخل المراكز على المهارات الأساسية (التدريبية - الاستقلالية) خلال السنة الدراسية من أجل الارتقاء بهم وتطوير مهاراتهم.",
    "تقديم برامج الرعاية الصحية والنفسية داخل المراكز لذوي الإعاقة خلال السنة الدراسية للوقوف على مدى صحتهم.",
    "تنظيم البرامج الإرشادية والتوعوية الأسرية والمجتمعية داخل المراكز أثناء العام الدراسي للإرشاد وتوعية الأسر بمشكلات أبنائهم وكيفية التعامل معها.",
    "العمل على دمج ذوي الإعاقة في المجتمع من خلال المشاركات والبرامج الخارجية أثناء السنة الدراسية حتى يكونوا أفراد فاعلين في المجتمع.",
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="من نحن" currentPath="/about" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-8" dir="rtl">
        <div className="w-full h-[25rem] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/about.jpg"
            alt="About us celebration"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-1 text-right">
          <h2 className="text-3xl font-bold text-black">من نحن</h2>
          <h3 className="text-2xl font-bold leading-relaxed text-green-900">
            نعمل على تحسين القدرات وتطوير مهاراته المعرفية والحياتية والاجتماعية
          </h3>

          <ul className="pt-4 space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-1 text-lg leading-tight text-green-900"
              >
                <span className="min-w-[0.5rem] h-[0.5rem] rounded-full bg-green-700 mt-3"></span>
                <p>{point}</p>
              </li>
            ))}
          </ul>

          <p className="pt-4 text-lg font-bold">
            للتسجيل الان
            <a
              href="/services"
              className="mr-2 text-blue-600 underline hover:text-blue-800"
            >
              خدماتنا
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Who;
