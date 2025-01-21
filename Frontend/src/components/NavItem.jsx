import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
  closeMenu,
}) => {
  return (
    <NavLink
      to={link}
      className={`${
        name === activeNavName
          ? "font-semibold text-primary"
          : "text-[#A5A5A5]"
      } flex items-center gap-x-2 py-2 text-lg`}
      onClick={() => {setActiveNavName(name); closeMenu()}}
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default NavItem;
