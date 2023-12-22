import React from "react";
import PrimaryBtn from "../../components/button";
import "./index.scss";
const Headers = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>This is Header</h1>
          <PrimaryBtn  bgColor='black' btnText='Click Header'/>
        </div>
      </div>
    </header>
  );
};

export default Headers;
