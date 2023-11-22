import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 relative after:absolute after:bg-[#da9f5b] after:w-0.5 after:h-28 after:-top-32">
      <h4 className="text-2xl font-bold text-[#da9f5b] tracking-widest mt-4">
        {title}
      </h4>
      <h1 className="text-5xl font-bold">{subtitle}</h1>
    </div>
  );
};

export default SectionHeader;
