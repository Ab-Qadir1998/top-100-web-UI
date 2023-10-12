import React from "react";

const ThemeButton = ({ text, type, width, bg, margin }) => {
  return (
    <button
      type={type ? type : ""}
      className={`btn ${width ? width : ""} ${
        bg ? "secondary-btn" : "primary-btn"
      } ${margin ? margin : ""} `}
    >
      {text}
    </button>
  );
};

export default ThemeButton;
