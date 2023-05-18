import './App.css';
import Navbar from './item-navbar/ApiNavabar';
import ItemData from './itemdata-dropdown/ItemData';
import CaroselImg from './items-image/CaroselImg';
import Images from './items-image/Images';
import SelectCountary from './items-image/SelectCountary';
// import { AmazonTshirt } from './json-data/ProductJson ';
// import ToggleButton from './J.s-Basic/ToggleButtons';
// import ArrayMethords from './J.s-Basic/ArrayMethords';
// import SpreadOperator from './J.s-Basic/SpreadOperator';
// import Destructuring from './J.s-Basic/Destructuring';
// // import Object from './ObjectDestucturing';
// import ClassConstructor from './OOP-Concepts/ClassConstructor';
// import Objects from './OOP-Concepts/Objects';
// import Inheritance from './OOP-Concepts/Inheritance';
import MapMethord from './map-methord/MapMethord';
// import Dates from './DEMO/Dates';
import SearchFunctionlity from './search-function/SearchFunctionlity';
import AmazonTshirt from './product-tshirt/AmazonTshirt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutTshirt from './product-tshirt/AboutTshirt';
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <ToggleButton /> */}
            {/* <ArrayMethords /> */}
            {/* <SpreadOperator /> */}
            {/* <Destructuring /> */}
            {/* <Object /> */}
            {/* <ClassConstructor /> */}
            {/* <Objects /> */}
            {/* <Inheritance /> */}
            {/* <MapMethord /> */}
            {/* <SearchFunctionlity /> */}
            {/* <ItemData /> */}
            {/* <Navbar /> */}
            {/* <CaroselImg /> */}
            {/* <Images /> */}
            {/* <SelectCountary /> */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AmazonTshirt />} />
                <Route path='/Tshirt/:id' element={<AboutTshirt />} />
                {/* <Route path='' /> */}
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
