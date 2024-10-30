// src/components/Header.js
import { NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Button } from "antd";
import ZAbutton from "./ZAbutton";

function Header() {
  return (
    <header className="header sticky w-full ">
      <div className="header__left ">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.ljyCoqmIIR1ENHxnC5LdYAHaHa&pid=Api&P=0&h=220"
          alt="LinkedIn Clone"
        />
        <input type="text" placeholder="Search" />
        <button className="btn font-sans ml-5">Search</button>
      </div>
      <div className="header__right">
        {/* Add links/icons for Home, My Network, Jobs, etc. */}
        <div className="header__option">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="header__option">My Network</div>
        <div className="header__option">Jobs</div>
        <div>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </div>
        {/* Add Profile Avatar */}
      </div>
    </header>
  );
}

export default Header;
