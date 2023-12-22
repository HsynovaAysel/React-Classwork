import React from "react";
import PrimaryBtn from "../../components/button";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h1>This is Footer</h1>
          <PrimaryBtn bgColor='bisque' btnText='Click Footer'/>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;
