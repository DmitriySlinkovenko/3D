import React from "react";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {["Home", "About", "Projects", "Contact"].map((item, index) => {
        <li key={index} className="nav-li">
          <a href="" className="nav-li_a">
            {item}
          </a>
        </li>;
      })}
    </ul>
  );
};

export default NavItems;
