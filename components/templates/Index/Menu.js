import React from "react";
import SectionHeader from "../../modules/SectionHeader/SectionHeader";
import MenuItem from "../../modules/MenuItem/MenuItem";

const Menu = ({ menu }) => {
  return (
    <div className="container mt-60">
      <SectionHeader title="MENU & PRICING" subtitle="Competitive Pricing" />
      <div className="flex justify-evenly items-center mt-12">
        <h3 className="text-4xl font-bold">Hot Coffee</h3>
        <h3 className="text-4xl font-bold">Cold Coffee</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mt-12">
        {menu.slice(0, 4).map((menuItem) => (
          <MenuItem {...menuItem} key={menuItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
