import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Methodology = () => {
  const steps = [
    {
      title: "التقييم الوظيفي الأولي",
      description:
        "يتم إجراء تقييم وظيفي غير تشخيصي للمستفيد، يهدف إلى فهم مستوى الأداء الحالي، وتحديد نقاط القوة واحتياجات الدعم، وذلك دون الخوض في أي تشخيص طبي أو تربوي.",
    },
    {
      title: "تصميم خطة تأهيل فردية",
      description:
        "بناء خطة تأهيلية داعمة لكل مستفيد، تُحدَّد فيها الأهداف الوظيفية والسلوكية والاجتماعية، وتُصمَّم بما يتناسب مع قدراته وإمكاناته، مع مراجعتها وتحديثها بشكل دوري.",
    },
    {
      title: "تنفيذ البرامج التأهيلية الداعمة",
      description:
        "تقديم برامج تأهيلية عملية تركّز على تنمية المهارات الوظيفية اليومية، تعزيز التفاعل الاجتماعي والسلوك التكيفي، ودعم مهارات الاستقلال والاعتماد على الذات باستخدام أساليب تدريبية مناسبة وآمنة.",
    },
    {
      title: "الشراكة مع الأسرة",
      description:
        "إشراك الأسرة في العملية التأهيلية من خلال التوجيه والإرشاد والمتابعة، بما يضمن استمرارية الأثر التأهيلي داخل البيئة اليومية للمستفيد.",
    },
    {
      title: "المتابعة والتقويم المستمر",
      description:
        "متابعة تقدّم المستفيد بشكل دوري، وتقييم مستوى تحقيق الأهداف التأهيلية، وإجراء التعديلات اللازمة على البرامج بما يحقق أفضل نتائج ممكنة.",
    },
    {
      title: "بيئة تأهيلية آمنة ومحفّزة",
      description:
        "توفير بيئة داعمة تحترم الخصوصية والكرامة الإنسانية، وتُشجّع على التعلّم الوظيفي والتفاعل الإيجابي، مع الالتزام بمعايير السلامة المهنية.",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="منهجية التأهيل والدعم" currentPath="/methodology" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            منهجية التأهيل والدعم
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="space-y-8 text-right">
          <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
            <p className="text-xl font-medium leading-relaxed text-gray-900">
              يعتمد مركز يدك معنا للتأهيل للرعاية منهجية تأهيلية داعمة شاملة،
              ترتكز على فهم احتياجات المستفيد وقدراته الفردية، وتُقدَّم في إطار
              غير طبي وغير تشخيصي، وبما يضمن تحقيق أفضل أثر وظيفي واجتماعي ممكن.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              تنطلق منهجية المركز من مبادئ مهنية معتمدة في مجال التأهيل
              والرعاية، وتراعي الجوانب الإنسانية والنفسية والاجتماعية للمستفيد،
              مع التركيز على بناء المهارات العملية الداعمة للاستقلالية وجودة
              الحياة.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {steps.map((item, index) => (
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

export default Methodology;
