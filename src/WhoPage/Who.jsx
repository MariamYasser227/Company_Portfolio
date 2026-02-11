import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Who = () => {
  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="من نحن" currentPath="/about" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            من نحن
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>
        <div
          className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/assets/who.jpeg"
            alt="مركز يدك معنا للتأهيل"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6 text-right">
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              <strong className="text-[#1a8650] ml-2">
                مركز يدك معنا للتأهيل للرعاية
              </strong>
              هو مركز تأهيلي متخصص يُعنى بتقديم خدمات الدعم والتأهيل غير الطبي
              للأشخاص ذوي الإعاقة والفئات التي تحتاج إلى برامج رعاية وتأهيل،
              بهدف تمكينهم من تحسين مستوى الأداء الوظيفي، وتعزيز الاستقلالية،
              ورفع جودة الحياة في إطار إنساني ومهني منظم.
            </p>

            <p>
              يعمل المركز وفق منهجية تأهيلية شاملة قائمة على أفضل الممارسات
              المهنية المعتمدة في مجال التأهيل والرعاية، مع الالتزام بالضوابط
              والأنظمة المعمول بها في المملكة العربية السعودية، وتحت إشراف وزارة
              الموارد البشرية والتنمية الاجتماعية، وبما يضمن احترام حقوق
              المستفيدين وخصوصيتهم وكرامتهم الإنسانية.
            </p>

            <div className="p-6 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
              <p>
                لا يقدّم المركز خدمات طبية أو تشخيصية، ولا يُعد جهة تعليمية
                نظامية، وإنما يركّز على التأهيل الداعم والتدريب الوظيفي والسلوكي
                والاجتماعي، من خلال برامج مصممة بعناية لتناسب احتياجات كل مستفيد
                وقدراته، وبالشراكة الفاعلة مع الأسرة بوصفها عنصرًا أساسيًا في
                عملية التأهيل.
              </p>
            </div>

            <p>
              يسعى مركز يدك معنا إلى أن يكون بيئة آمنة، داعمة، ومحفّزة، تُقدَّم
              فيها خدمات التأهيل وفق معايير الجودة، والمسؤولية المهنية،
              والأخلاقيات الإنسانية، بما ينسجم مع توجهات المملكة في تمكين
              الأشخاص ذوي الإعاقة وتعزيز مشاركتهم الفاعلة في المجتمع.
            </p>
          </div>

          <div className="pt-6">
            <p className="flex items-center gap-2 text-xl font-bold text-black">
              للتسجيل الآن واكتشاف المزيد:
              <a
                href="/services"
                className="text-blue-600 underline transition-colors decoration-2 underline-offset-4 hover:text-blue-800"
              >
                خدماتنا التأهيلية
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Who;
