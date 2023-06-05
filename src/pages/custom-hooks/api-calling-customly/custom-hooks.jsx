import React, { useEffect, useState } from "react";

const CustomHooks = (url) => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("urlResponce", data);
  }, [url]);

  return [data];
};

export default CustomHooks;
