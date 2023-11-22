import ServicesList from "@/components/templates/Services/Services";
import React from "react";

const Services = ({ data }) => {
  return (
    <div className="pb-20">
      <ServicesList services={data.services} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000/services`);
  const services = await res.json();

  return {
    props: {
      data: {
        services,
      },
    },
  };
}

export default Services;
