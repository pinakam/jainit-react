import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Emplloyee from "./pages/curd/emplloyee-data";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap";
const App = () => {
  return (
    <div>
      <Emplloyee />
    </div>
  );
};

export default App;
