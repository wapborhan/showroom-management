import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className="bi-chevron-down toggle-btn">
            <FaAngleDown />
          </i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </NavLink>
    );
  }
}
