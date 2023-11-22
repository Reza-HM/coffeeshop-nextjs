import React from "react";
import { FaCheck } from "react-icons/fa";
import SectionHeader from "../../modules/SectionHeader/SectionHeader";

const About = () => {
  return (
    <div className="container mt-60">
      <SectionHeader title="ABOUT US" subtitle="Serving Since 1950" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 mt-12">
        <div className="flex flex-col gap-8">
          <h4 className="text-4xl font-bold">Our Story</h4>
          <h6 className="text-justify text-lg font-bold max-w-sm">
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h6>
          <p className="text-justify max-w-sm">
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
          <button className="bg-black text-white py-2 w-40 font-bold px-6 transition-all duration-200">
            Learn More
          </button>
        </div>
        <div className="">
          <img src="/img/about.png" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-bold">Our Vision</h4>
          <p className="text-justify max-w-sm">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
          </ul>
          <button className="bg-[#da9f5b] py-2 w-40 font-bold px-6 hover:bg-[#da9f5b]/90 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
