import React from "react";
import SectionHeader from "../../modules/SectionHeader/SectionHeader";
import Client from "../../modules/Client/Client";

const Testimonial = ({ comments }) => {
  return (
    <div className="container mt-60 mb-32">
      <SectionHeader title="TESTIMONIAL" subtitle="Our Clients Say" />
      <div className="flex flex-col gap-8 mt-12">
        {comments.map((comment) => (
          <Client {...comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
