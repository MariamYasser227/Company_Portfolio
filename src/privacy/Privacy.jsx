import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Privacy = () => {
  const sections = [
    {
      title: "سياسة الخصوصية وحماية البيانات",
      items: [
        {
          label: "جمع البيانات بحذر",
          text: "نجمع فقط البيانات اللازمة لتقديم الخدمات التأهيلية وتطويرها بما يخدم مصلحة المستفيد.",
        },
        {
          label: "الحفظ الآمن والسرية",
          text: "تخزين البيانات بشكل محمي وعدم مشاركتها مع أي أطراف خارجية إلا بموافقة رسمية من ولي الأمر.",
        },
        {
          label: "حق الوصول والتعديل",
          text: "تمكين الأسر من الوصول إلى بيانات أبنائهم وتصحيحها لضمان دقة السجلات التأهيلية.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="الخصوصية" currentPath="/privacy" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-12" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            سياسة الخصوصية وحماية البيانات
          </h2>
        </div>

        <div className="space-y-12 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يولي المركز أهمية قصوى لحماية خصوصية المستفيدين وبياناتهم الشخصية.
              وتضمن سياسات
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

export default Privacy;
