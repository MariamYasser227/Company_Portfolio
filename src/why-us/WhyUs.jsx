import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import { PiPlantFill } from "react-icons/pi";

const WhyUs = () => {
  const reasons = [
    {
      title: "التركيز على الفرد",
      description:
        "كل برنامج وخطة مصممة بعناية حسب قدرات واحتياجات كل مستفيد لضمان التطور الشخصي المستمر.",
    },
    {
      title: "الالتزام بالقيم",
      description:
        "نضع احترام الكرامة، والخصوصية، والمشاركة الأسرية الفاعلة في مقدمة أولوياتنا المهنية.",
    },
    {
      title: "الخبرة المهنية",
      description:
        "نمتلك فريقاً متخصصاً ومؤهلاً مع خبرة مثبتة في مجال التأهيل والدعم غير الطبي.",
    },
    {
      title: "التحسين المستمر",
      description:
        "نقوم بتقييم ومراجعة البرامج بشكل دوري لضمان مواكبة أحدث الأساليب وتحقيق أفضل النتائج.",
    },
    {
      title: "بيئة آمنة ومحفزة",
      description:
        "نوفر مساحة يشعر فيها المستفيد بالأمان التام، ويجد التشجيع المستمر للتقدم والنمو.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="لماذا يدك معنا؟" currentPath="/why-us" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            لماذا “يدك معنا”؟
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            شراكة حقيقية من أجل التمكين
          </h3>
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              اختيار "يدك معنا للتأهيل للرعاية" يعني أن المستفيد والأسرة لن
              يحصلوا على خدمات تقليدية فقط، بل على تجربة تأهيلية متكاملة تهدف
              إلى تغيير جودة الحياة بشكل ملموس.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 transition-all bg-white border border-gray-100 shadow-sm hover:bg-green-50/50 rounded-xl"
              >
                <div className="flex items-center justify-center min-w-[3rem] h-12 rounded-lg bg-[#1a8650] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-green-900">
                    {reason.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#f0f9f1] rounded-2xl border-dashed border-2 border-[#1a8650] text-center">
            <p className="text-2xl font-bold text-[#0e4b2d] leading-relaxed flex flex-wrap items-center justify-center gap-2">
              <span>
                باختصار: اختيار "يدك معنا" يعني شراكة حقيقية من أجل تمكين
                المستفيدين وتحقيق نتائج ملموسة، في بيئة آمنة وموثوقة
              </span>
              <PiPlantFill className="text-3xl text-[#1a8650]" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
