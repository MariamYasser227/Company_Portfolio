import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const TeamWork = () => {
  const teamSections = [
    {
      title: "الأخصائيون التأهيليون",
      description:
        "تصميم وتنفيذ برامج الدعم والتأهيل غير الطبي، ومتابعة تقدم المستفيدين وتعديل الخطط حسب الحاجة لضمان أفضل النتائج.",
    },
    {
      title: "مدربو المهارات الوظيفية والاجتماعية",
      description:
        "تعزيز التفاعل الاجتماعي والسلوك التكيفي، وتطوير المهارات العملية اليومية لتعزيز الاستقلالية والاعتماد على الذات.",
    },
    {
      title: "فريق الإرشاد الأسري",
      description:
        "دعم الأسرة وإرشادها لتكون شريكًا فاعلًا في عملية التأهيل، وتقديم استراتيجيات عملية لتعزيز أثر البرامج التأهيلية في المنزل.",
    },
    {
      title: "الإدارة والرقابة المهنية",
      description:
        "متابعة جودة البرامج، التأكد من الالتزام بالمعايير والأنظمة السعودية، وتطوير السياسات بما يحقق التحسين المستمر.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="فريق العمل" currentPath="/team" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            فريق العمل
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يضم مركز يدك معنا فريقًا متخصصًا، مكون من خبراء ومدربين محترفين في
              مجال التأهيل والدعم غير الطبي، ملتزمين بالقيم المؤسسية والمعايير
              الأخلاقية والمهنية، ويعملون مع كل مستفيد بأسلوب شخصي ومتفاهم مع
              احتياجاته وقدراته.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
            {teamSections.map((member, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 transition-all bg-white border hover:shadow-md border-gray-50 rounded-xl"
              >
                <span className="flex items-center justify-center min-w-[3rem] h-12 rounded-full bg-[#1a8650] text-white font-bold text-xl">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-green-900">
                    {member.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {member.description}
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

export default TeamWork;
