import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const OurServices = () => {
  const [active, setActive] = React.useState(1);
  const itemsPerPage = 9;

  const services = [
    {
      title: "المهارات اللغوية",
      desc: "نبني اللغة كوسيلة للتواصل الحقيقي، لا مجرد كلمات، لنساعد المستفيد على التعبير عن نفسه بثقة ووضوح.",
      image: "/assets/logo.png",
    },
    {
      title: "اضطراب طيف التوحد",
      desc: "برامج داعمة تراعي الفروق الفردية، وتركّز على التفاعل، الفهم، والاندماج الإيجابي في الحياة اليومية.",
      image: "/assets/logo.png",
    },
    {
      title: "الإرشاد النفسي",
      desc: "مساحة آمنة للدعم النفسي، تساعد المستفيد وأسرته على التكيّف، الفهم، وبناء التوازن الانفعالي.",
      image: "/assets/logo.png",
    },
    {
      title: "التعديل السلوكي",
      desc: "نوجّه السلوك نحو الإيجابية من خلال أساليب داعمة تحترم الفرد وتُعزز الاستقرار والتكيّف.",
      image: "/assets/logo.png",
    },
    {
      title: "جلسات التأهيل الفردية",
      desc: "جلسات مصممة خصيصًا حسب احتياجات كل مستفيد، لتحقيق أقصى تطور ممكن بخطوات واقعية ومدروسة.",
      image: "/assets/logo.png",
    },
    {
      title: "الإرشاد الأسري",
      desc: "نُمكّن الأسرة بالمعرفة والتوجيه، لتكون شريكًا واعيًا ومؤثرًا في رحلة التأهيل.",
      image: "/assets/logo.png",
    },
    {
      title: "العلاج الطبيعي",
      desc: "دعم القدرات الحركية وتحسين التحكم الجسدي بما يعزز الاستقلالية والاعتماد على الذات.",
      image: "/assets/logo.png",
    },
    {
      title: "النطق والتخاطب",
      desc: "نساعد المستفيد على التواصل بفعالية، وتحسين وضوح الكلام وفهم اللغة في المواقف اليومية.",
      image: "/assets/logo.png",
    },
    {
      title: "فرط الحركة وتشتت الانتباه",
      desc: "برامج داعمة لتنظيم الحركة والانتباه، وتحسين القدرة على التركيز والتفاعل الهادئ.",
      image: "/assets/logo.png",
    },
    {
      title: "التكامل الدراسي",
      desc: "دعم المهارات الأساسية المرتبطة بالتعلّم، بما يساعد المستفيد على التكيّف مع المتطلبات الدراسية.",
      image: "/assets/logo.png",
    },
    {
      title: "التكامل الحسي",
      desc: "تنظيم الاستجابات الحسية لمساعدة المستفيد على التفاعل بثبات وراحة مع البيئة المحيطة.",
      image: "/assets/logo.png",
    },
    {
      title: "صعوبات التعلّم",
      desc: "دعم وظيفي موجّه لتجاوز التحديات التعليمية، وبناء استراتيجيات تعلم أكثر فاعلية.",
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
