import React from "react";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2023 HypeVillage<br></br>&#169; Developed by{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://noearobles.github.io/noesPortfolio"
        >
          Noe Robles
        </a>
      </p>
      <p className="icons">
        <a href="https://www.instagram.com/hypevillagetx/">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/HypeVillageTX/">
          {" "}
          <AiOutlineFacebook />
        </a>
      </p>
    </div>
  );
};

export default Footer;
