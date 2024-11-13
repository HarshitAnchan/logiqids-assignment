import React from "react";
import "./Navbar.css";
import SwipeableTemporaryDrawer from "./HamburgerDrawer";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="icon">
        <SwipeableTemporaryDrawer />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
