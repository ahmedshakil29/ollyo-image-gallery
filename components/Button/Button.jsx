//Module Name: Button
//developed by:Shakil Ahmed
//developed for:Ollyo
//All right reserved to Shakil Ahmed

import React from "react";
import Style from "./Button.module.css";

const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={handleClick} height={50}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
