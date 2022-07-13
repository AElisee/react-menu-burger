import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [showlinks, setShowlinks] = useState(false);

  const handleClick = () => {
    setShowlinks(!showlinks);
  };
  console.log(showlinks);
  return (
    <div className={`navbar ${showlinks ? "show-nav" : "nav-hidden"}`}>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="nav_item">
          <a href="/" className="nav_link">
            Acceuil
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            Portfolio
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            Services
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            A propos
          </a>
        </li>
        <li className="nav_item">
          <a href="/" className="nav_link">
            Conatcts
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleClick}>
        <span className="burger_bar"></span>
      </button>
    </div>
  );
};

export default Nav;
