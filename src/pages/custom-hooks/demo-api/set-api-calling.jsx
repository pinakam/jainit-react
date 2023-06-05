import React from "react";
import CustomlyApi from "./custom-api-calling";

const SetApiCalling = () => {
  const [customApi] = CustomlyApi("https://jsonplaceholder.typicode.com/todos");
  console.log("customApi", customApi);
  return (
    <div>{customApi && customApi.map((data) => <li>{data.title}</li>)}</div>
  );
};

export default SetApiCalling;
