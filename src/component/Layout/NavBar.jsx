import React from "react";
import { Link } from "react-router-dom";
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
import { useState } from "react";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const navLinks = [
    { name: "الرئيسية", path: "/", active: true },
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
      {navLinks.map((link, index) => (
        <Typography
          key={index}
          as="li"
          className={`cursor-pointer font-medium ${
            isMobile
              ? `${
                  link.highlight ? "text-[#4caf50]" : "text-white"
                } text-xl font-normal`
              : `${
                  link.active
                    ? "text-[#1a8650] border-b-2 border-[#1a8650]"
                    : "text-gray-800 hover:text-[#1a8650]"
                } text-lg font-bold`
          }`}
        >
          <Link to={link.path} onClick={isMobile ? toggleDrawer : undefined}>
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="w-full" dir="rtl">
      <Navbar className="sticky top-0 z-10 max-w-full px-4 py-3 bg-[#e0e7e1] border-none rounded-none shadow-none h-max lg:p-5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="h-16 w-36" />
          </Link>

          <div className="hidden lg:block">{navList(false)}</div>

          <div className="flex items-center gap-4">
            <Button
              className="inline-block bg-[#1a8650] rounded-sm px-5 py-3 font-bold text-lg"
              size="md"
            >
              تواصل معنا
            </Button>
            <IconButton
              variant="text"
              className=" lg:hidden"
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
        className="p-0 bg-transparent backdrop-blur-md"
        overlayProps={{ className: "fixed inset-0 bg-black/40" }}
      >
        <div className="relative flex flex-col w-full h-full">
          <div className="flex items-center justify-end p-6">
            <IconButton
              variant="text"
              color="white"
              onClick={toggleDrawer}
              className="hover:bg-[#1a8650]"
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
