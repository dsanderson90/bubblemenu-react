import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ category, menuItems, addItem }) => {
  //TODO: Filter items by # of clicks
  const items = menuItems.map((item, i) => (
    <MenuItem key={i} addItem={addItem} price={item.price} name={item.name} />
  ));
  return (
    <>
      <h1 className="text-2xl my-5 text-blue-800 font-semibold">{category}</h1>
      <div className="flex flex-wrap">{items}</div>
    </>
  );
};

export default MenuSection;
