import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Compliance = () => {
  const sections = [
    {
      title: "الالتزام النظامي والأخلاقي",
      items: [
        {
          label: "الامتثال القانوني",
          text: "الالتزام بأنظمة وزارة الموارد البشرية والتنمية الاجتماعية، وضمان تقديم خدمات التأهيل ضمن الإطار القانوني المسموح.",
        },
        {
          label: "الشفافية والمصداقية",
          text: "تقديم معلومات دقيقة عن الخدمات، والالتزام بالممارسات المهنية الصحيحة دون مبالغة أو وعود غير واقعية.",
        },
        {
          label: "حماية حقوق المستفيدين",
          text: "احترام حقوق الأفراد في الحصول على الخدمات بشكل عادل وآمن، مع ضمان المشاركة الفاعلة لأسرهم في عملية التأهيل.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="الالتزام والخصوصية" currentPath="/compliance" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-12" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            الالتزام النظامي والأخلاقي
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="space-y-12 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يحرص مركز يدك معنا على الالتزام بكافة الأنظمة واللوائح المعمول بها
              في المملكة العربية السعودية، بما يضمن تقديم خدمات تأهيلية داعمة
              وآمنة، وتحقيق الشفافية والمصداقية في جميع أنشطته.
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section, sIndex) => (
              <div key={sIndex} className="space-y-6">
                <h4 className="text-2xl font-bold text-[#1a8650] flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#1a8650] rounded-full"></span>
                  {section.title}
                </h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {section.items.map((item, iIndex) => (
                    <div
                      key={iIndex}
                      className="p-6 transition-shadow bg-white border border-gray-100 rounded-xl hover:shadow-md"
                    >
                      <h5 className="mb-3 text-lg font-bold text-green-900">
                        {item.label}
                      </h5>
                      <p className="text-base leading-relaxed text-gray-700">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Compliance;
