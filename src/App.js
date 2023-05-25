import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/hospital/hospitals-type";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitalType" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
