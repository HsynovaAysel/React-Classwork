import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1 className="logo">Code Academy</h1>
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/products">Products</NavLink>
             
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
