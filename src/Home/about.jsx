import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="relative px-6 py-16 overflow-hidden bg-white md:px-12 lg:px-24">
        <div className="container flex flex-col items-center justify-between gap-12 mx-auto md:flex-row-reverse">
          <div className="w-full text-right md:w-1/2 dir-rtl" dir="rtl">
            <h1 className="w-5/6 mb-3 text-3xl font-bold leading-10 text-black md:text-5xl text-start">
              تحسين القدرات و تطوير مهاراته
              <span className="block text-black">
                المعرفية والحياتية والاجتماعية
              </span>
            </h1>

            <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-900">
              نعمل بشغف وإتقان لتقديم أفضل الخدمات باستخدام أحدث التقنيات
              المتقدمة بالمجال، والبرامج المعتمدة عالمياً تحت إشراف ومتابعة نخبة
              من مقدمي الخدمات الصحية والتأهيلية والتربوية.
            </p>

            <Link to="/about">
              <Button
                className="inline-block relative overflow-hidden group  transition-colors duration-300 bg-[#1a8650] rounded-lg w-[8rem] h-[3rem] font-bold text-white shadow-none text-lg  items-center justify-center   mr-4"
                size="lg"
              >
                <span className="absolute inset-0 transition-transform duration-500 ease-in-out origin-center scale-x-0 bg-[#073d22] group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white ">
                  اقرأ المزيد
                </span>
              </Button>
            </Link>
          </div>
          <div className="relative flex justify-center w-full md:w-1/2">
            <img
              src="/assets/about.jpg"
              alt="Human Growth"
              className="relative z-10 object-contain w-full max-w-md rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="relative px-6 py-16 overflow-hidden bg-white md:px-12 lg:px-24">
        <div className="container flex flex-col items-center justify-between gap-12 mx-auto md:flex-row-reverse">
          <div className="relative flex justify-center w-full md:w-1/2">
            <img
              src="/assets/about2.jpeg"
              alt="Human Growth"
              className="relative z-10 object-contain w-full max-w-md"
            />
          </div>
          <div className="w-full text-right md:w-1/2 dir-rtl" dir="rtl">
            <h1 className="w-5/6 mb-3 text-3xl font-bold leading-10 text-black md:text-5xl text-start">
              عن رئيس مجلس الادارة
            </h1>

            <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-900">
              هو مهتم باضطراب طيف التوحد حاصل على درجة الماجستير من جامعة لاتروب
              الأسترالية ودرجة الدكتوراة من جامعة موناش بأستراليا، وهو مؤسس
              ورئيس جمعية اضطراب طيف التوحد بالمنطقة كينا للجودة والتطوير بحلية
              الباحة، وساهم الدكتور الجبران بتأسيس العديد من مراكز الرعاية
              النهارية في مدن ومناطق مختلفة بالمملكة العربية السعودية ويهتم
              الدكتور منصور بالدمج المجتمعي لذوي الإعاقة، وتطبيق الاتفاقيات
              والتشريعات التي وقعتها المملكة العربية السعودية، له عدة أبحاث
              علمية، كما حضر العديد من المؤتمرات وورش العمل على المستوى المحلي
              والدولي.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-[20rem] w-full flex-col items-center justify-center overflow-hidden bg-[#0a3633] px-6 py-12 text-center">
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(/assets/download.png)`,
            backgroundColor: "rgba(10, 54, 51, 0.85)",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        <div className="relative z-10 max-w-5xl">
          <h2 className="mb-10 text-xl font-bold leading-relaxed text-white md:text-xl lg:text-2xl lg:leading-[1.8]">
            توفر نمو الإنسانية مجموعة من الخدمات التأهيلية، والعيادية، والتربوية
            حول مناطق المملكة العربية السعودية مثل: التشخيص الطبي، التقييم
            النفسي، اختبارات الذكاء، التأهيل التربوي، والعلاج الطبيعي الوظيفي،
            بالإضافة إلى علاج النطق والتخاطب
          </h2>

          <Link to="/services">
            <Button
              className="relative overflow-hidden group transition-all duration-300 bg-[#1a8650] rounded-lg w-[14rem] h-[3.5rem] text-center items-center justify-center p-0 font-bold text-white shadow-none text-lg mr-4"
              size="lg"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                <span className="absolute inset-0 transition-transform duration-500 ease-in-out origin-center rounded-lg scale-x-0 bg-[#073d22] group-hover:scale-x-100"></span>

                <span className="relative z-10 px-4 transition-colors duration-500 rounded-lg group-hover:text-white whitespace-nowrap">
                  للاستفادة من خدماتنا
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
