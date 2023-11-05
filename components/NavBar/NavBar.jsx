//Module Name: NavBar
//developed by:Shakil Ahmed
//developed for:Ollyo
//All right reserved to Shakil Ahmed

import React from "react";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <h1>Ollyo Gallery</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
