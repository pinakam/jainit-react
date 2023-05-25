import React from "react";

const Input = (props) => {
  const { value, onChange, type, name } = props;
  return (
    <>
      <input
        type={type}
        className={`form-control select-control`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
