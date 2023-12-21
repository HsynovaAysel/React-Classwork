import "./index.scss";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { MdAddLocation } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
function Fotter() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="icon-adress">
              <span>lorem ipsum </span>
              <MdAddLocation />
            </div>
            <div className="icon-adress">
              <BsFillTelephoneFill />
              <span>loerm ipsum 111</span>
            </div>
            <div className="icon-adress">
              <span>lore@mail.com</span>
              <MdOutlineMessage />
            </div>
          </div>
          <div className="bottom">
            <div className="input-btn">
              <input type="text" />
              <button>SUBSCRIBE</button>
            </div>
            <div className="sosial-icon">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <IoLogoTwitter />
              </a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
