import React from "react";
import TableComp from "../../components/table";
import "./index.scss";
const HomePage = ({users}) => {
  return (
    <div id="home-page">
      <div className="container">
        <h1>Home Page</h1>
        <h3>Users Table</h3>
        <div className="table"><TableComp users={users}/></div>
      </div>
    </div>
  );
};

export default HomePage;
