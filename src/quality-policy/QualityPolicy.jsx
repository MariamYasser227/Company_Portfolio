import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const QualityPolicy = () => {
  const policies = [
    {
      title: "الالتزام بمعايير الجودة",
      description:
        "تطبيق أفضل الممارسات المهنية في التأهيل غير الطبي، مراعاة الاحتياجات الفردية لكل مستفيد، والالتزام بالأنظمة واللوائح السعودية ذات الصلة.",
    },
    {
      title: "التحسين المستمر",
      description:
        "تقييم دوري للبرامج والخدمات، مراجعة وتحديث الخطط التأهيلية بناءً على نتائج التقييم، وتبني تقنيات وأساليب حديثة في التأهيل والدعم.",
    },
    {
      title: "قياس الأداء ورضا المستفيدين",
      description:
        "متابعة تقدم المستفيدين بشكل دوري، استخدام مؤشرات أداء واضحة لتقييم جودة البرامج، وتحليل ملاحظات الأسر لتطوير الخدمات.",
    },
    {
      title: "تدريب وتطوير فريق العمل",
      description:
        "رفع كفاءة الموظفين من خلال برامج تدريبية مستمرة، تشجيع الابتكار، وضمان التزام الفريق بالقيم المؤسسية وأخلاقيات المهنة.",
    },
    {
      title: "توثيق وإدارة المعرفة",
      description:
        "توثيق العمليات التأهيلية بشكل منهجي، الاستفادة من التجارب السابقة، وبناء قاعدة معرفية تدعم اتخاذ القرار وتحسين الأداء.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="سياسة الجودة والتحسين" currentPath="/quality-policy" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            سياسة الجودة والتحسين المستمر
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

       
        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              في يدك معنا للتأهيل للرعاية، نؤمن بأن الجودة ليست هدفًا مؤقتًا، بل أسلوب حياة مؤسسي يضمن تقديم أفضل الخدمات التأهيلية للمستفيدين وأسرهم. ترتكز سياستنا على التحسين المستمر لكل جانب من جوانب عملنا، بما يحقق رضا المستفيدين، ويعزز ثقتهم، ويحقق النتائج المرجوة.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {policies.map((item, index) => (
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

export default QualityPolicy;