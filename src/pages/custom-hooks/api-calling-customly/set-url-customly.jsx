import React from "react";
import CustomHooks from "./custom-hooks";

const SetUrlCustomly = () => {
  const [data] = CustomHooks(`https://jsonplaceholder.typicode.com/todos`);
  return <>{data && data.map((data) => <li>{data.title}</li>)}</>;
};

export default SetUrlCustomly;
