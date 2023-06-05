import axios from "axios";
import { useEffect, useState } from "react";

const CustomlyApi = (url) => {
  const [customApi, setcustomApi] = useState("");
  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setcustomApi(data)));
  }, [url]);

  return [customApi];
};

export default CustomlyApi;
