import axios from "axios";
import React, { useState } from "react";

const CustomlySearchBar = (url) => {
  const [search, setSearch] = useState();
  const [data, setData] = useState("");
  const [isTimeOut, setIsTimeOut] = useState(null);
  const handleInputSearch = (e) => {
    setSearch(e.target.value);
    handleSearch();
  };
  const apiCalling = async () => {
    const datas = await axios.get(url + search);
    // console.log(datas);
    setData(datas);
  };
  const handleSearch = () => {
    clearTimeout(isTimeOut);
    setIsTimeOut(
      setTimeout(() => {
        apiCalling(search);
      }, 1000)
    );
  };
  return (
    <>
      <form class="d-flex  mt-3" role="search">
        <input
          class="form-control me-2"
          type="search"
          aria-label="Search"
          value={search}
          onChange={handleInputSearch}
          placeholder="Search here sds"
        />
      </form>
    </>
  );
};

export default CustomlySearchBar;
