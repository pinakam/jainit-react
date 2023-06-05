import React, { useState } from "react";
import CustomlySearchBar from "./customly-search-bar";

const ApiSearching = () => {
  const [data] = CustomlySearchBar(
    `https://jobfair.psolution.in/api/apply-jobseeker?title=`
  );
  console.log(data);
  return <></>;
};

export default ApiSearching;
