import './App.css';
import ItemData from './itemdata-dropdown/ItemData';
// import ToggleButton from './J.s-Basic/ToggleButtons';
// import ArrayMethords from './J.s-Basic/ArrayMethords';
// import SpreadOperator from './J.s-Basic/SpreadOperator';
// import Destructuring from './J.s-Basic/Destructuring';
// // import Object from './ObjectDestucturing';
// import ClassConstructor from './OOP-Concepts/ClassConstructor';
// import Objects from './OOP-Concepts/Objects';
// import Inheritance from './OOP-Concepts/Inheritance';
// import Dates from './DEMO/Dates';
import SearchFunctionlity from './search-function/SearchFunctionlity';
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
            <SearchFunctionlity />
            {/* <ItemData /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
