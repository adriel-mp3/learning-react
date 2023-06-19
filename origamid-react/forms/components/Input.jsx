import React from "react";

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        onChange={({ target }) => setValue(target.value)} 
        {...props}
        />
    </>
  );
};

export default Input;
