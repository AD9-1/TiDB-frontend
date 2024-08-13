import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/wishguard/logo-png.png";
const Navbar = ({ setPage,page }) => {

  const handleClick = (index) => {
    setPage(index)
  };
  return (
    <div className="navbar">
      <div className="navbar__image">
        <img src={logo} alt="WishGuard logo" />
      </div>
      <ul className="navbar__fields">
        {["About", "Business", "Sign-Up", "Login"].map((item, index) => {
             const pageMapping = ["about", "business", "sign-up", "login"];
          return (
            <li
              key={index}
              className={page === pageMapping[index] ? "active" : "inactive"}
              onClick={() => handleClick(pageMapping[index])}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
