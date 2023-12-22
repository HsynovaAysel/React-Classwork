import "./index.scss";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { MdAddLocation } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="icon-adress">
              <span>lorem ipsum </span>
              <MdAddLocation className="icon" />
            </div>
            <div className="icon-adress">
              <BsFillTelephoneFill className="icon" />
              <span>loerm ipsum 111</span>
            </div>
            <div className="icon-adress">
              <span>lore@mail.com</span>
              <MdOutlineMessage className="icon" />
            </div>
          </div>
          <div className="bottom">
            <div className="input-btn">
              <input type="email" placeholder="email" required />
              <button>SUBSCRIBE</button>
            </div>
            <div className="sosial-icon">
              <a href="#">
                <FaFacebookF className="icon" />
              </a>
              <a href="#">
                <IoLogoTwitter className="icon"  />
              </a>
              <a href="#">
                <FaFacebookF className="icon" />
              </a>
              <a href="#">
                {" "}
                <IoLogoTwitter className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
