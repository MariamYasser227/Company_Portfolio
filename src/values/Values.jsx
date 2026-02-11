import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const CorporateValues = () => {
  const values = [
    {
      title: "الكرامة الإنسانية",
      description:
        "نؤمن بأن لكل إنسان الحق في الاحترام والتقدير دون تمييز، ونلتزم بالحفاظ على كرامة المستفيدين في جميع مراحل التأهيل، باعتبارهم شركاء في النجاح لا متلقين للخدمة فقط.",
    },
    {
      title: "المسؤولية المهنية",
      description:
        "نلتزم بتقديم خدماتنا وفق أسس مهنية واضحة، وبما يتوافق مع الأنظمة واللوائح المعتمدة، مع الالتزام بالأخلاقيات المهنية والشفافية في الأداء واتخاذ القرار.",
    },
    {
      title: "الجودة والتميّز",
      description:
        "نسعى إلى التحسين المستمر في جودة الخدمات التأهيلية، من خلال تطبيق أفضل الممارسات المهنية، وتطوير البرامج بما يتناسب مع احتياجات المستفيدين وقدراتهم الفردية.",
    },
    {
      title: "التمكين والاستقلالية",
      description:
        "نركّز على تمكين المستفيدين من تنمية قدراتهم الوظيفية والاجتماعية، وتعزيز الاعتماد على الذات، بما يسهم في تحسين جودة حياتهم ومشاركتهم الفاعلة في المجتمع.",
    },
    {
      title: "الشراكة مع الأسرة",
      description:
        "نعتبر الأسرة عنصرًا أساسيًا في العملية التأهيلية، ونعمل على إشراكها بوعي واحترام، وتزويدها بالدعم والإرشاد اللازم لتعزيز أثر البرامج التأهيلية.",
    },
    {
      title: "الخصوصية والسرية",
      description:
        "نلتزم بحماية خصوصية المستفيدين وبياناتهم، والتعامل معها بسرية تامة، وفق السياسات المعتمدة، وبما يضمن الأمان والثقة المتبادلة.",
    },
    {
      title: "العدالة وتكافؤ الفرص",
      description:
        "نحرص على تقديم خدماتنا بعدالة ومهنية، وبما يضمن تكافؤ الفرص لجميع المستفيدين، وفق احتياجاتهم الفردية دون تحيّز أو إقصاء.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="قيمنا المؤسسية" currentPath="/values" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            قيمنا المؤسسية
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            في مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/values.jpg"
            alt="قيم مركز يدك معنا"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              تنطلق جميع خدمات وبرامج مركز يدك معنا للتأهيل للرعاية من منظومة
              قيم مؤسسية واضحة تشكّل الإطار الأخلاقي والمهني لعملنا، وتوجّه
              علاقتنا بالمستفيدين وأسرهم والمجتمع، وتضمن تقديم خدمات تأهيلية
              قائمة على الاحترام والجودة والمسؤولية.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {values.map((item, index) => (
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
        </div>
      </div>
    </main>
  );
};

export default CorporateValues;
