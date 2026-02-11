import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import { TiPin } from "react-icons/ti";

const ServicesScope = () => {
  const services = [
    {
      title: "برامج التأهيل الوظيفي",
      description:
        "تدريب على المهارات اليومية والحياتية، دعم الاستقلالية في الأداء الوظيفي والاجتماعي، وتنمية المهارات العملية اللازمة للاندماج في المجتمع.",
    },
    {
      title: "برامج الدعم السلوكي والاجتماعي",
      description:
        "تعزيز مهارات التفاعل الاجتماعي، تحسين السلوك التكيفي، ودعم إدارة الانفعالات والاندماج الأسري والمجتمعي.",
    },
    {
      title: "برامج التمكين الذهني والمعرفي",
      description:
        "أنشطة تطوير التركيز والانتباه، دعم القدرات المعرفية والوظائف التنفيذية، وبرامج تعزيز التعلم العملي والمستقل.",
    },
    {
      title: "الإرشاد والتوجيه الأسري",
      description:
        "تدريب الأسرة على دعم المستفيد يوميًا، تقديم استراتيجيات عملية لتعزيز أثر البرامج التأهيلية، وتوعية الأسرة ضمن بيئة غير طبية.",
    },
    {
      title: "برامج الدعم النفسي والاجتماعي",
      description:
        "دعم التأقلم مع التحديات اليومية، توفير بيئة داعمة للتفاعل الإيجابي، وبرامج تعزيز الثقة بالنفس والقدرة على الاعتماد على الذات.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader
        title="نطاق الخدمات التأهيلية"
        currentPath="/services-scope"
      />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            نطاق الخدمات التأهيلية
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="w-full aspect-[17/9] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/service.jpeg"
            alt="خدمات مركز يدك معنا"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يقدّم مركز يدك معنا للتأهيل للرعاية مجموعة متكاملة من الخدمات
              التأهيلية الداعمة، المصممة لتلبية احتياجات المستفيدين المختلفين
              ضمن بيئة آمنة ومحفزة، مع الالتزام الكامل بالأنظمة السعودية ومعايير
              الجودة المهنية، مع وضوح أن هذه الخدمات غير طبية وغير تشخيصية.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 transition-colors hover:bg-gray-50 rounded-xl"
              >
                <span className="flex items-center justify-center min-w-[2.5rem] h-10 rounded-lg bg-[#1a8650] text-white font-bold text-xl">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-green-900">
                    {item.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f0f9f1] border-r-4 border-[#1a8650] rounded-l-xl mt-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">
                <TiPin className="text-green-700" />
              </span>
              <h4 className="text-xl font-bold text-[#0e4b2d]">
                ملاحظة ذكية وجاذبة:
              </h4>
            </div>
            <p className="text-lg leading-relaxed text-gray-800">
              كل برنامج من برامجنا مُصمم خصيصًا لتلبية احتياجات الفرد دون تشخيص
              أو علاج طبي، مع التركيز على التطوير الوظيفي والاجتماعي وتمكين
              المستفيد والأسرة ضمن بيئة آمنة وفعّالة.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesScope;
