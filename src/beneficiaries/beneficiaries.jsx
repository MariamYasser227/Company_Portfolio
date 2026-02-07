import React from "react";
import PageHeader from "../component/Layout/PageHeader";

const Beneficiaries = () => {
  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="الفئات المستفيدة" currentPath="/beneficiaries" />

      <div className="max-w-6xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            الفئات المستفيدة
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            خدمات تأهيلية شاملة لمختلف الفئات
          </h3>
        </div>

        <div className="w-full h-[25rem] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/bene.jpeg"
            alt="الفئات المستفيدة بمركز يدك معنا"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6 text-right">
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <div className="p-8 border-r-4 bg-gray-50 border-green-700/30 rounded-l-xl">
              <p className="text-xl font-medium text-gray-900 leading-extra-loose">
                يقدّم{" "}
                <strong className="text-[#1a8650]">
                  مركز يدك معنا للتأهيل للرعاية
                </strong>{" "}
                خدماته للأشخاص ذوي الإعاقة والفئات المحتاجة إلى دعم وتأهيل غير
                طبي، ويشمل ذلك – على سبيل المثال لا الحصر – الأفراد الذين
                يواجهون صعوبات في التواصل، أو التفاعل الاجتماعي، أو السلوك
                التكيفي، أو تنمية المهارات الوظيفية، بما في ذلك الفئات المصنّفة
                ضمن اضطرابات النمو أو المتلازمات الوراثية، وذلك وفق برامج
                تأهيلية داعمة تراعي الفروق الفردية واحتياجات كل مستفيد.
              </p>
            </div>

            <div className="p-6 border-r-4 border-red-200 bg-red-50 rounded-l-xl">
              <h4 className="mb-2 text-xl font-bold text-red-900">
                ملاحظة تنظيمية مهمة:
              </h4>
              <p className="text-lg text-red-800">
                يحرص المركز على أن تكون جميع الخدمات المقدمة غير طبية وغير
                تشخيصية، ولا تحل محل الخدمات الصحية أو التعليمية النظامية، وإنما
                تُقدَّم في إطار التأهيل الداعم والتدريب الوظيفي والاجتماعي، وفق
                الأنظمة المعمول بها في المملكة العربية السعودية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Beneficiaries;
