import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const OurMission = () => {
  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="رسالتنا" currentPath="/mission" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            رسالتنا
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            تمكين القدرات وتطوير المهارات
          </h3>
        </div>

        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/who.jpeg"
            alt="رسالة مركز يدك معنا"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6 text-right">
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
              <p className="text-xl font-medium text-gray-900 leading-extra-loose">
                تقديم خدمات تأهيلية داعمة ومتخصصة وغير طبية، قائمة على أسس مهنية
                وأخلاقية واضحة، تهدف إلى تنمية القدرات الوظيفية والسلوكية
                والاجتماعية للمستفيدين، وتعزيز استقلاليتهم، ودعم أسرهم كشركاء
                فاعلين في عملية التأهيل.
              </p>
            </div>

            <p className="pr-2">
              وذلك في بيئة آمنة ومحفزة، تلتزم بمعايير الجودة، وتحترم كرامة
              الإنسان وحقوقه، وتنسجم مع الأنظمة والتوجهات التنموية في المملكة
              العربية السعودية.
            </p>
          </div>

          <div className="pt-6">
            <p className="flex items-center gap-2 text-xl font-bold text-black">
              تعرف على المبادئ التي تحكم عملنا:
              <a
                href="/values"
                className="text-blue-600 underline transition-colors decoration-2 underline-offset-4 hover:text-blue-800"
              >
                قيمنا المؤسسية
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurMission;
