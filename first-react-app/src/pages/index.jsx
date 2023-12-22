import React from "react";
import Button from "../components/button";
import "./index.scss";
import Shekil from "../assets/images/portr1.jpg";
function Page() {
  return (
    <section id="page">
      <div className="container">
        <div className="page">
          <div className="left">
            {" "}
            <h1>ELECTRICAL SERVICE PROVIDERS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae tempore cupiditate blanditiis dolorem, autem fugiat.
              Laborum iste incidunt ipsum nisi modi,
            </p>
            <Button />
          </div>
          <div className="right">
            <img src={Shekil} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
