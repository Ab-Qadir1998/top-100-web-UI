import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <>
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
