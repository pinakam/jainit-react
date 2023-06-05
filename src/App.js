import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/hospital/hospitals-type";
import Home from "./pages/home/home";
import SetUrlCustomly from "./pages/custom-hooks/api-calling-customly/set-url-customly";
import SetApiCalling from "./pages/custom-hooks/demo-api/set-api-calling";
import Search from "./utils/helper/search/search";
import SearchBar from "./pages/custom-hooks/customly-api-calling/api-call";
import ApiSearching from "./utils/helper/search/custom-search/api-searching";
import CustomlySearchBar from "./utils/helper/search/custom-search/customly-search-bar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />

          {/* <Route path="/" element={<ApiSearching />} /> */}
          {/* <Route path="/" element={<CustomlySearchBar />} /> */}
          <Route path="/hospitalType" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
