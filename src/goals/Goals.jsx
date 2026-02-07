import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const OurGoals = () => {
  const goals = [
    {
      title: "تمكين المستفيدين وظيفيًا واجتماعيًا",
      description:
        "العمل على تنمية المهارات الوظيفية والسلوكية والاجتماعية للمستفيدين، بما يعزز قدرتهم على الاعتماد على الذات والمشاركة الإيجابية في الحياة اليومية والمجتمع.",
    },
    {
      title: "تحسين جودة الحياة",
      description:
        "المساهمة في تحسين جودة حياة المستفيدين وأسرهم من خلال برامج تأهيلية داعمة تراعي الفروق الفردية وتستهدف الجوانب الوظيفية والنفسية والاجتماعية.",
    },
    {
      title: "تقديم خدمات تأهيلية غير طبية وفق أسس مهنية",
      description:
        "توفير برامج تأهيلية داعمة وغير طبية، قائمة على أفضل الممارسات المهنية في مجال التأهيل والرعاية، وبما يلتزم بالأنظمة والضوابط المعمول بها.",
    },
    {
      title: "دعم الأسرة وتعزيز دورها التأهيلي",
      description:
        "تمكين أسر المستفيدين من أداء دورهم كشركاء فاعلين في عملية التأهيل، من خلال الإرشاد والتوجيه وبناء الوعي بآليات الدعم المناسبة.",
    },
    {
      title: "توفير بيئة آمنة ومحفزة",
      description:
        "تهيئة بيئة تأهيلية آمنة، داعمة، ومحفزة، تراعي الجوانب الإنسانية والنفسية للمستفيدين، وتدعم الاستقرار والاندماج الإيجابي.",
    },
    {
      title: "الالتزام بالجودة والتحسين المستمر",
      description:
        "تطبيق معايير الجودة في تقديم الخدمات، والسعي المستمر لتطوير البرامج والأساليب التأهيلية بما يواكب احتياجات المستفيدين ومتطلبات المجتمع.",
    },
    {
      title: "الإسهام في التنمية المجتمعية",
      description:
        "دعم جهود المجتمع في رعاية وتمكين الأشخاص ذوي الإعاقة والفئات المحتاجة للدعم، وتعزيز ثقافة المسؤولية المجتمعية والشمول.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="أهدافنا" currentPath="/goals" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            أهداف المركز
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يهدف مركز يدك معنا للتأهيل للرعاية إلى تقديم خدمات تأهيلية داعمة
              تُسهم في تحسين جودة حياة المستفيدين، وتمكينهم من تنمية قدراتهم
              الوظيفية والاجتماعية، وذلك من خلال مجموعة من الأهداف الواضحة
              والمحددة التي تنطلق من احتياجات المستفيدين، وتنسجم مع التوجهات
              التنموية في المملكة العربية السعودية.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {goals.map((item, index) => (
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

export default OurGoals;
