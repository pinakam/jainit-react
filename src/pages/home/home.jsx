import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hospitalType");
  };
  return (
    <div>
      <h3> Click to redirect to Hospital Type Page</h3>
      <button onClick={handleClick} className="btn btn-secondary">
        AddHospitalType
      </button>
    </div>
  );
};

export default Home;
