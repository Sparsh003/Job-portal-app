import React from "react";

const Label = ({ htmlFor, label, isRequired, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
