import Menus from "@/components/templates/Menu/Menu";
import React from "react";

const Menu = ({ data }) => {
  return (
    <div className="pb-20">
      <Menus menu={data.menu} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000/menu`);
  const menu = await res.json();

  return {
    props: {
      data: {
        menu,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Menu;
