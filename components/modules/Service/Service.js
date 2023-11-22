import React from "react";
import { FaTruck } from "react-icons/fa";

const Service = ({ img, title, desc }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <img src={img} className="rounded-md" alt="" />
      </div>
      <div className="flex-[2]">
        <div className="flex items-center gap-4">
          <FaTruck className="text-2xl bg-[#da9f5b] w-10 h-10 flex justify-center items-center rounded-[50%] p-2" />{" "}
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
        <p className="max-w-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
