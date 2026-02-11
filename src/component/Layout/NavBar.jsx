import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "رؤيتنا", path: "/vision" },
    { name: "رسالتنا", path: "/mission" },
    { name: "قيمنا المؤسسية", path: "/values" },
    { name: "أهداف المركز", path: "/goals" },
    { name: "الفئات المستفيدة", path: "/beneficiaries" },
    { name: "منهجية التأهيل", path: "/methodology" },
    { name: "نطاق الخدمات", path: "/services-scope" },
    { name: "سياسة الجودة", path: "/quality-policy" },
    { name: "الالتزام النظامي", path: "/compliance" },
    { name: "الخصوصية", path: "/privacy" },
    { name: "حقوق المستفيدين", path: "/rights" },
    { name: "فريق العمل", path: "/team" },
    { name: "لماذا يدك معنا؟", path: "/why-us" },
    { name: "الأسئلة الشائعة", path: "/faq" },
  ];

  const socialLinks = [
    { icon: <FaYoutube />, url: "https://youtube.com/..." },
    { icon: <FaInstagram />, url: "https://instagram.com/..." },
    { icon: <FaXTwitter />, url: "https://x.com/..." },
    { icon: <FaFacebookF />, url: "https://facebook.com/..." },
  ];

  const navList = (isMobile = false) => (
    <ul
      className={`flex ${
        isMobile
          ? "flex-col items-start gap-4 w-full pr-8 overflow-y-auto max-h-[70vh]"
          : "flex-row items-center gap-4 flex-wrap justify-center"
      }`}
    >
      {navLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        return (
          <Typography
            key={index}
            as="li"
            className={`cursor-pointer relative group pb-1 ${
              isMobile
                ? `${isActive ? "text-[#4caf50]" : "text-white"} text-lg font-normal`
                : `${isActive ? "text-[#1a8650]" : "text-black hover:text-[#1a8650]"} text-md font-bold`
            }`}
          >
            <Link to={link.path} onClick={isMobile ? toggleDrawer : undefined}>
              {link.name}
              {!isMobile && (
                <span
                  className={`absolute bottom-0 right-0 h-[2px] bg-[#1a8650] transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              )}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <div className="w-full" dir="rtl">
      <Navbar
        className={`fixed top-0 z-50 h-max max-w-full rounded-none border-none transition-all duration-300 px-4 shadow-none lg:px-8 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-2"
            : "bg-gradient-to-l from-[#c1d5c8] via-[#c1d5c8] to-[#f8faf9] py-2 lg:py-4"
        }`}
      >
        <div className="flex items-center justify-between w-full gap-2">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-12 w-24" : "h-16 w-28"
              }`}
            />
          </Link>
          <div className="flex-grow hidden mx-4 lg:block">{navList(false)}</div>
          <div className="flex items-center gap-2">
            <Link to="/contact">
              <Button
                className="inline-block relative overflow-hidden group transition-colors duration-300 bg-[#1a8650] rounded-none px-4 py-2 font-bold text-white shadow-none text-sm text-center animate-lightOnOff"
                size="md"
              >
                <span className="absolute inset-0 transition-transform duration-500 ease-in-out origin-center scale-x-0 bg-[#073d22] group-hover:scale-x-100"></span>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  تواصل معنا
                </span>
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="lg:hidden"
              onClick={toggleDrawer}
            >
              <Bars3Icon
                className="text-white bg-[#1a8650] w-10 h-10 p-1 rounded-sm"
                strokeWidth={2}
              />
            </IconButton>
          </div>
        </div>
      </Navbar>

      <Drawer
        placement="right"
        open={openDrawer}
        onClose={toggleDrawer}
        size={window.innerWidth}
        className="bg-[#13231a]/95 backdrop-blur-md p-0"
        overlayProps={{ className: "fixed inset-0 bg-black/40" }}
      >
        <div className="relative flex flex-col w-full h-full">
          <div className="flex items-center justify-end p-6">
            <IconButton
              variant="text"
              color="white"
              onClick={toggleDrawer}
              className="hover:bg-transparent"
            >
              <XMarkIcon className="w-8 h-8" strokeWidth={2} />
            </IconButton>
          </div>
          <div className="mt-2 overflow-y-auto">{navList(true)}</div>
          <div className="flex items-center justify-center gap-6 pb-10 mt-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-white transition-opacity hover:opacity-70"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
