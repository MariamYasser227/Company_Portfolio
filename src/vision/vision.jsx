import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const OurVision = () => {
  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="رؤيتنا" currentPath="/vision" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            رؤيتنا
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            الطموح والريادة في التأهيل
          </h3>
        </div>

        <div className="space-y-6 text-right">
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
              <p className="text-xl font-medium text-gray-900">
                أن يكون
                <strong className="text-[#1a8650] mr-3 ml-3">
                  مركز يدك معنا للتأهيل للرعاية
                </strong>
                نموذجًا وطنيًا رائدًا في مجال التأهيل غير الطبي، يُسهم بفاعلية
                في تمكين الأشخاص ذوي الإعاقة والفئات المحتاجة للدعم، وتعزيز
                مشاركتهم الإيجابية في المجتمع، من خلال خدمات تأهيلية إنسانية،
                مهنية، ومستدامة، تركز على جودة الحياة والاعتماد على الذات.
              </p>
            </div>

            <p className="pr-2">
              نحن نؤمن بأن كل فرد يمتلك قدرات كامنة تستحق الاكتشاف والتطوير،
              ورؤيتنا هي الجسر الذي يعبر به مستفيدونا نحو مستقبل أكثر استقلالية
              وإشراقاً.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurVision;
