import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const OurServices = () => {
  const [active, setActive] = React.useState(1);
  const itemsPerPage = 9;

  const services = [
    {
      title: "الإرشاد النفسي",
      desc: "دعم نفسي متخصص لمساعدة الأفراد على التعامل مع التحديات اليومية وتعزيز التوازن النفسي.",
      image: "/assets/logo.png",
    },
    {
      title: "جلسات العلاج الفردية",
      desc: "جلسات مصممة تهدف لفهم احتياجات الطفل السلوكية والنفسية وتقديم تدخلات فعالة لكل حالة.",
      image: "/assets/logo.png",
    },
    {
      title: "التعديل السلوكي",
      desc: "برنامج يعتمد على تحليل السلوك لفهم أسباب التصرفات غير المرغوبة وتعديلها تدريجياً.",
      image: "/assets/logo.png",
    },
    {
      title: "فرط الحركة",
      desc: "برامج علاجية تركز على تنظيم النشاط الزائد وتحسين الانتباه والتركيز.",
      image: "/assets/logo.png",
    },
    {
      title: "النطق والتخاطب",
      desc: "جلسات مكثفة لتحسين مهارات النطق والتواصل وتعزيز القدرة على التعبير بشكل أفضل.",
      image: "/assets/logo.png",
    },
    {
      title: "العلاج الطبيعي",
      desc: "تأهيل حركي يساعد على تحسين التوازن والقوة البدنية لدى الأطفال ذوي الاحتياجات الخاصة.",
      image: "/assets/logo.png",
    },
    {
      title: "صعوبات التعلم",
      desc: "خطط تعليمية متخصصة تركز على نقاط القوة وتساعد في تخطي العوائق التعليمية.",
      image: "/assets/logo.png",
    },
    {
      title: "التكامل الحسي",
      desc: "تدريبات تساعد في تنظيم ردود الفعل الحسية وتعزيز التفاعل مع البيئة المحيطة.",
      image: "/assets/logo.png",
    },
    {
      title: "التكامل الدراسي",
      desc: "دعم تعليمي فردي يعزز التفاعل داخل الفصول ويساعد في اكتساب المهارات الأكاديمية الأساسية.",
      image: "/assets/logo.png",
    },
    {
      title: "الإعاقة العقلية",
      desc: "برامج متخصصة تؤثر على تنمية المهارات الأساسية واستقلالية الفرد حسب قدراته.",
      image: "/assets/logo.png",
    },
    {
      title: "اضطراب طيف التوحد",
      desc: "جلسات تواصل وسلوك تهدف لتحسين التفاعل الاجتماعي وتخفيف السلوكيات المتكررة.",
      image: "/assets/logo.png",
    },
    {
      title: "متلازمة داون",
      desc: "برامج تأهيلية تهدف إلى تنمية المهارات الحياتية والاجتماعية لدى الأطفال.",
      image: "/assets/logo.png",
    },
  ];

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const indexOfLastItem = active * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    className:
      active === index
        ? "bg-green-900 text-white rounded-full"
        : "text-green-900 rounded-full",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="خدماتنا" currentPath="/services" />

      <div className="max-w-6xl px-4 mx-auto mt-16" dir="rtl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg rounded-xl group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center text-white bg-green-800">
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-16" dir="ltr">
          <IconButton
            variant="text"
            className="text-green-700 border border-green-700 rounded-full"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="w-4 h-4" />
          </IconButton>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <IconButton key={i + 1} {...getItemProps(i + 1)}>
                {i + 1}
              </IconButton>
            ))}
          </div>

          <IconButton
            variant="text"
            className="text-green-700 border border-green-700 rounded-full"
            onClick={next}
            disabled={active === totalPages}
          >
            <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
