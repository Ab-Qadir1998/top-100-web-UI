import React from "react";

const ThemeButton = ({ text, type, width }) => {
  return (
    <button type={type ? type : ""} className={`btn primary-btn ${width}`}>
      {text}
    </button>
  );
};

export default ThemeButton;
