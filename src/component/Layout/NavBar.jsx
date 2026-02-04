import React, { useState } from "react";
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
import { TbWorld } from "react-icons/tb";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "مراكز التمكين الشامل", path: "/centers" },
    { name: "خدماتنا", path: "/services" },
    { name: "المركز الإعلامي", path: "/media" },
    { name: "تصفح مراكزنا", path: "/browse-centers" },
    { name: "الفعاليات", path: "/events" },
    { name: "الوظائف", path: "/jobs" },
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
          ? "flex-col items-start gap-5 w-full pr-8"
          : "flex-row items-center gap-6"
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
                ? `${isActive ? "text-[#4caf50]" : "text-white"} text-xl font-normal`
                : `${
                    isActive
                      ? "text-[#1a8650]"
                      : "text-gray-800 hover:text-[#1a8650]"
                  } text-lg font-bold`
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
      <Navbar className="sticky top-0 z-10 max-w-full px-4 py-3 bg-[#e0e7e1] border-none rounded-none shadow-none h-max lg:px-12 lg:py-4">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="object-contain w-auto h-16"
            />
          </Link>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden lg:block">{navList(false)}</div>

            <Button
              className="inline-block bg-[#1a8650] rounded-none w-[8rem] h-[3rem] font-bold text-white shadow-none text-lg  items-center justify-center  animate-lightOnOff mr-4"
              size="lg"
            >
              تواصل معنا
            </Button>
            <IconButton
              variant="text"
              className="lg:hidden"
              onClick={toggleDrawer}
            >
              <Bars3Icon
                className="text-white bg-[#1a8650] w-12 h-12 p-1 rounded-sm"
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

          <div className="mt-4">{navList(true)}</div>

          <div className="flex items-center justify-center gap-6 pb-20 mt-auto">
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
