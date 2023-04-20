import React from "react";

const Destructuring = () => {
  const user = {
    name: "Reed",
    age: 28,
  };
  // Dot property access
  var name = user.name;
  var age = user.age;
  // Object destructuring
  var { age, name: knowsEnglish } = user;
 
  
};

export default Destructuring;
