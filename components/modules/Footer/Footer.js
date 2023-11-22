import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full offer relative before:contents-[''] before:absolute before:bg-[url('/img/overlay-top.png')] before:top-px before:w-full before:h-4 before:left-0 before:z-10 text-white pt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-slate-500 pb-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">GET IN TOUCH</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaLocationDot />
                123 Street, New York, USA
              </li>
              <li className="flex items-center gap-4">
                <FaPhone />
                +012 345 67890
              </li>
              <li className="flex items-center gap-4">
                <MdOutlineEmail />
                info@example.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">FOLLOW US</h3>
            <p className="max-w-xs">
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="flex items-center gap-2">
              <FaFacebookF className="text-2xl border border-white p-2 h-10 w-10 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all duration-200" />
              <FaLinkedinIn className="text-2xl border border-white p-2 h-10 w-10 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all duration-200" />
              <FaTwitter className="text-2xl border border-white p-2 h-10 w-10 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all duration-200" />
              <FaInstagram className="text-2xl border border-white p-2 h-10 w-10 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">OPEN HOURS</h3>
            <div className="">
              <h6>MONDAY - FRIDAY</h6>
              <p>8.00 AM - 8.00 PM</p>
            </div>
            <div className="">
              <h6>SATURDAY - SUNDAY</h6>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">NEWSLETTER</h3>
            <p>
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="relative bg-white py-2 px-8">
              <input
                type="text"
                className="bg-unset border-none outline-none focus:outline-none"
                placeholder="Your Email"
              />
              <button className="absolute right-0 bg-[#da9f5b] p-2 top-0">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-8 text-white">
          <h5 className="text-lg">
            Copyright © <span className="text-[#da9f5b]">Domain</span>. All
            Rights Reserved.
          </h5>
          <h5 className="text-lg">Designed by HTML Codex</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
