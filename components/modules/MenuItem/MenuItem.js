import Link from "next/link";
import React from "react";

const MenuItem = ({ title, img, desc, price, id }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="relative">
        <img src={img} className="h-32 w-32 rounded-[50%]" alt="" />
        <div className="bg-[#da9f5b] p-2 rounded-full absolute top-0 right-0">
          ${price}
        </div>
      </div>
      <div className="space-y-4">
        <Link href={`/product/${id}`} className="text-3xl font-bold">
          {title}
        </Link>
        <p className="max-w-sm text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
