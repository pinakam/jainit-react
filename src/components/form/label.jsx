import React from "react";

const Label = (props) => {
  const { name } = props;
  return <label className="form-label">{name}</label>;
};

export default Label;
