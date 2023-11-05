//Module Name: Footer
//developed by:Shakil Ahmed
//developed for:Ollyo
//All right reserved to Shakil Ahmed

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
            <a href="https://github.com/ahmedshakil29">
              <TiSocialGithub />
            </a>
            <a href="https://www.linkedin.com/in/shakil-ahmed-aiub/">
              <TiSocialLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
