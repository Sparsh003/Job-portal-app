import React from "react";

const Input = ({
  isRequired,
  className,
  type,
  value,
  name,
  placeholder,
  onChange,
  checked
}) => {
  return (
    <input
      type={type}
      autoComplete="off"
      name={name}
      className={className}
      required={isRequired}
      placeholder={placeholder}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Input;
