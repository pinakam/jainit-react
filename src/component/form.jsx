import React from "react";

const Form = (props) => {
  const { lable, name, handleChange, type, value } = props;
  return (
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          {lable}
        </label>
        <input
          type={type}
          class="form-control"
          onChange={handleChange}
          name={name}
          value={value}
        />
      </div>
    </div>
  );
};

export default Form;
