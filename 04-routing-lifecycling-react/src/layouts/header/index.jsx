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
              <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/products">Products</NavLink></li>
           <li><NavLink to="/suppliers">Suppliers</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
