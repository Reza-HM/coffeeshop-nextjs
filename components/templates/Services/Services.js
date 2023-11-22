import React from "react";
import SectionHeader from "../../modules/SectionHeader/SectionHeader";
import Service from "../../modules/Service/Service";

const Services = ({ services }) => {
  return (
    <div className="container mt-60">
      <SectionHeader title="OUR SERVICES" subtitle="Fresh & Organic Beans" />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center items-center gap-4 mt-12">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
