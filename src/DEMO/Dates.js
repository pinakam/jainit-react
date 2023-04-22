import React from "react";

const Dates = () => {
  const Dates = new Date();
  const month = Dates.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Days = Dates.getDay();
  const mont = months[month];
  const mathRandom = Math.ceil(Math.random() * 100);
  return (
    <div>
      <h2>
        {Days}, {mont},{mathRandom}
        {}
      </h2>
    </div>
  );
};

export default Dates;
