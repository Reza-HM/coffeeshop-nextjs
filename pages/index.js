import React from "react";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Off from "@/components/templates/Index/Off";
import Menu from "@/components/templates/Index/Menu";
import Booking from "@/components/templates/Index/Booking";
import Testimonial from "@/components/templates/Index/Testimonial";

const Home = ({ data }) => {
  return (
    <div className="">
      <About />
      <Services services={data.services} />
      <Off />
      <Menu menu={data.menu} />
      <Booking />
      <Testimonial comments={data.comments} />
    </div>
  );
};

export async function getStaticProps() {
  const resServices = await fetch(`http://localhost:8000/services`);
  const services = await resServices.json();

  const resMenus = await fetch(`http://localhost:8000/menu`);
  const menu = await resMenus.json();

  const resComments = await fetch(`http://localhost:8000/comments`);
  const comments = await resComments.json();

  return {
    props: {
      data: {
        services,
        menu,
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Home;
