import React from "react";

export const InputText = ({ type, name, value, placeholder, onChange,className }) => {
  const inputClass=`   ${className}`
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
};
