import { Typography, IconButton } from "@material-tailwind/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "روابط هامة",
    items: [
      { label: "من نحن", path: "/about" },
      { label: "خدماتنا", path: "/services" },
      { label: "المركز الإعلامي", path: "/media" },
      { label: "مراكزنا", path: "/centers" },
    ],
  },
  {
    title: " ",
    items: [
      { label: "تواصل معنا", path: "/contact" },
      { label: "من نحن", path: "/about" },
      { label: "بوابة فريقنا", path: "/team" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1a1a1a] py-12 text-right" dir="rtl">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <img src="/assets/logo.png" alt="Logo" className="w-56 mb-6 h-36" />
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="text"
                  color="white"
                  className="rounded-full bg-white/10"
                >
                  <FaFacebookF className="w-5 h-5 text-white" />
                </IconButton>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="text"
                  color="white"
                  className="rounded-full bg-white/10"
                >
                  <FaXTwitter className="w-5 h-5 text-white" />
                </IconButton>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="text"
                  color="white"
                  className="rounded-full bg-white/10"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </IconButton>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="text"
                  color="white"
                  className="rounded-full bg-white/10"
                >
                  <FaYoutube className="w-5 h-5 text-white" />
                </IconButton>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 font-bold"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.label}>
                    <Typography
                      as={Link}
                      to={link.path}
                      className="py-1.5 font-normal text-white transition-all duration-300 ease-in-out hover:text-[#1a8650] hover:pr-3"
                    >
                      {link.label}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            <Typography variant="h6" color="gray" className="mb-4 font-bold">
              معلومات التواصل
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 py-1.5 font-normal text-white transition-all duration-300 ease-in-out hover:text-[#1a8650] hover:pr-3">
                <HiOutlineClock className="h-5 w-5 text-[#1a8650] shrink-0" />
                <Typography className="text-sm font-normal">
                  الاحد - الخميس 7:00 ص - 8:00 م
                </Typography>
              </li>

              <li className="flex items-center gap-3 py-1.5 font-normal text-white transition-all duration-300 ease-in-out hover:text-[#1a8650] hover:pr-3">
                <HiOutlineLocationMarker className="h-5 w-5 text-[#1a8650] shrink-0" />
                <Typography className="text-sm font-normal">
                  المملكة العربية السعودية - الدمام - حي بدر
                </Typography>
              </li>

              <li className="flex items-center gap-3 py-1.5 font-normal text-white transition-all duration-300 ease-in-out hover:text-[#1a8650] hover:pr-3">
                <HiOutlinePhone className="h-5 w-5 text-[#1a8650] shrink-0" />
                <Typography className="text-sm font-normal" dir="ltr">
                  +966 59 868 4286
                </Typography>
              </li>

              <Link to="/contact">
                <li className="flex items-center gap-3 py-1.5 font-normal text-white transition-all duration-300 ease-in-out hover:text-[#1a8650] hover:pr-3">
                  <HiOutlineMail className="h-5 w-5 text-[#1a8650] shrink-0" />
                  <Typography className="text-sm font-normal">
                    yadakmaana1@gmail.com
                  </Typography>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Typography
            variant="small"
            className="mb-4 font-normal text-center text-gray-400 md:mb-0"
          >
            جميع الحقوق محفوظة
            <span className="mr-1 text-white"> ليدك معنا للتأهيل</span> &copy;
            2026
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
