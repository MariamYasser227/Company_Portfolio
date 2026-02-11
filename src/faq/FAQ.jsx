import React, { useState } from "react";
import PageHeader from "../component/Layout/PageHeader";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: "ما نوع الخدمات التي يقدمها المركز؟",
      answer:
        "يقدّم المركز خدمات تأهيلية داعمة وغير طبية، تركز على تنمية المهارات الوظيفية والاجتماعية والسلوكية، وتعزيز الاستقلالية، وتحسين جودة حياة المستفيدين، دون تقديم أي تشخيص أو علاج طبي.",
    },
    {
      question: "من هم المستفيدون من خدمات المركز؟",
      answer:
        "تستهدف خدماتنا الأشخاص ذوي الإعاقة والفئات المحتاجة إلى دعم وتأهيل، بما في ذلك الفئات التي تواجه صعوبات في التواصل، التفاعل الاجتماعي، السلوك التكيفي أو تنمية المهارات الوظيفية، مع إشراك الأسرة كشريك أساسي.",
    },
    {
      question: "هل المركز يقدم خدمات طبية أو علاجية؟",
      answer:
        "لا، جميع الخدمات غير طبية وغير تشخيصية، ولا تحل محل الخدمات الصحية أو التعليمية النظامية.",
    },
    {
      question: "كيف يتم تصميم خطة التأهيل لكل مستفيد؟",
      answer:
        "يتم تقييم احتياجات المستفيد بشكل غير تشخيصي، ثم تصميم خطة تأهيلية فردية مخصصة تتوافق مع قدراته، وتشمل أهدافًا واضحة للمهارات الوظيفية والاجتماعية والسلوكية.",
    },
    {
      question: "هل يمكن للأسرة المشاركة في العملية التأهيلية؟",
      answer:
        "نعم، المشاركة الأسرية جزء أساسي من منهجية المركز، حيث نقدم الإرشاد والتوجيه لتعزيز أثر البرامج التأهيلية في المنزل والمجتمع.",
    },
    {
      question: "كيف يضمن المركز سلامة وخصوصية المستفيدين؟",
      answer:
        "نلتزم بحماية بيانات المستفيدين وخصوصيتهم بشكل كامل، مع الالتزام الصارم بمعايير السلامة المهنية وتوفير بيئة تأهيلية آمنة وداعمة تحت إشراف متخصصين.",
    },
    {
      question: "هل يمكن زيارة المركز قبل التسجيل؟",
      answer:
        "نعم، نرحب بزيارة الأهالي للمركز للتعرف على فريق العمل والخدمات والمرافق المتوفرة قبل البدء في إجراءات تسجيل المستفيد.",
    },
  ];

  function Icon({ id, open }) {
    return (
      <IoIosArrowDown
        className={`${
          id === open ? "rotate-180" : ""
        } h-6 w-6 transition-transform text-[#1a8650]`}
      />
    );
  }

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="الأسئلة الشائعة" currentPath="/faq" />

      <div className="max-w-4xl px-4 mx-auto mt-10 space-y-10" dir="rtl">
        <div className="space-y-2 text-center md:text-right">
          <h2 className="text-3xl font-bold text-black border-r-4 border-[#1a8650] pr-4">
            الأسئلة الشائعة
          </h2>
          <h3 className="pr-4 text-2xl font-bold leading-relaxed text-green-900">
            مركز يدك معنا للتأهيل للرعاية
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
              className={`mb-4 rounded-xl border border-gray-100 px-6 transition-all duration-300 ${
                open === index + 1 ? "bg-green-50/30 shadow-sm" : "bg-white"
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className={`border-b-0 transition-colors hover:text-[#1a8650] text-right font-bold text-lg py-5 ${
                  open === index + 1 ? "text-[#1a8650]" : "text-gray-900"
                }`}
              >
                {faq.question}
              </AccordionHeader>
              <AccordionBody className="pt-0 pb-5 text-lg leading-relaxed text-right text-gray-900">
                {faq.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>

        <div className="pt-10 text-center border-t border-gray-100">
          <p className="mb-4 text-xl font-bold text-black">هل لديك سؤال آخر؟</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#1a8650] text-white rounded-full font-bold hover:bg-[#0e4b2d] transition-all shadow-md active:scale-95"
          >
            تواصل معنا مباشرة
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
