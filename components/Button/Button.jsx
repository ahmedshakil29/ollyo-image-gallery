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
