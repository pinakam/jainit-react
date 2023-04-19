import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButtons';
import Map from './Map';
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <ToggleButton /> */}
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
