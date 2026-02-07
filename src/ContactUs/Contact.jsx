import React from "react";
import PageHeader from "../component/Layout/PageHeader";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      title: "رقم الجوال",
      value: "0537766994",
      icon: <FaPhoneAlt />,
    },
    {
      title: "البريد الإلكتروني",
      value: "info@ghco.sa",
      icon: <FaEnvelope />,
    },
    {
      title: "العنوان",
      value: "المملكة العربية السعودية - المنطقة الشرقية - الأحساء",
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-white">
      <PageHeader title="تواصل معنا" currentPath="/contact" />

      <div className="relative z-10 px-4 mx-auto -mt-16 max-w-7xl" dir="rtl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-10 transition-all duration-300 bg-white border-b-4 border-green-700 shadow-xl rounded-xl hover:scale-105"
            >
              <div className="mb-4 text-3xl text-green-700">{info.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-center text-gray-700">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-20 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-green-900">
            نحن هنا لمساعدتكم
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            نحن هنا للإجابة عن جميع استفساراتكم ومساعدتكم في اختيار أفضل برامج
            التأهيل لاحتياجات مستفيدكم. يمكنك أيضًا ملء نموذج التواصل، وسيقوم
            فريقنا بالرد عليك في أقرب وقت ممكن لضمان تجربة سلسة ومريحة.
          </p>
        </div>

        <div className="grid items-center grid-cols-1 gap-0 mt-16 overflow-hidden bg-white border border-gray-100 shadow-2xl md:grid-cols-2 rounded-3xl">
          <div className="h-full min-h-[35rem]">
            <img
              src="/assets/image.jpg"
              alt="Contact Person"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8 md:p-12 bg-gray-50/50">
            <h2 className="pr-4 mb-8 text-3xl font-bold text-black border-r-4 border-green-700">
              أرسل لنا رسالة
            </h2>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="font-bold text-gray-700 text-md">الإسم</label>
                <input
                  type="text"
                  placeholder="أدخل الإسم الكامل"
                  className="w-full p-4 transition-all bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-700 text-md">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-4 transition-all bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-700 text-md">
                  رقم الجوال
                </label>
                <input
                  type="text"
                  placeholder="05xxxxxxxx"
                  className="w-full p-4 transition-all bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-gray-700 text-md">
                  الرسالة
                </label>
                <textarea
                  rows="4"
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full p-4 transition-all bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                ></textarea>
              </div>
              <button className="w-full px-16 py-4 font-bold text-white transition-all bg-green-700 rounded-lg shadow-lg md:w-auto hover:bg-green-800 active:scale-95">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
