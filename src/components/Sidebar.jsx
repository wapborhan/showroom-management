import React, { Fragment } from "react";
import { ImCoinDollar } from "react-icons/im";
import items from "./SidebarData.json";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="logo-details">
        <ImCoinDollar />
        <span className="logo_name">SR BUDGET</span>
      </div>
      {/* <div className="sidebar"> </div> */}
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </Fragment>
  );
};

export default Sidebar;
