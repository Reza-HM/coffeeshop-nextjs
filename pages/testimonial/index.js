import Testimonials from "@/components/templates/Testimonial/Testimonial";
import React from "react";

const Testimonial = ({ data }) => {
  return (
    <div>
      <Testimonials comments={data.comments} />
    </div>
  );
};

export async function getStaticProps() {
  const resComments = await fetch(`http://localhost:8000/comments`);
  const comments = await resComments.json();

  return {
    props: {
      data: {
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Testimonial;
