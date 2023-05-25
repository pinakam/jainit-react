import React from "react";

const Validater = (props) => {
  const { validation } = props;
  return (
    <div>
      <span style={{ color: "red" }}> {validation} </span>
    </div>
  );
};

export default Validater;
