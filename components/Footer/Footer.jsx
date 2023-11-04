import React from "react";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <p>© 2023 - Shakil Ahmed. All right reserved.</p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialGithub />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
