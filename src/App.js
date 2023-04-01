import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import RegionPicker from './containers/RegionPicker';
import Countries from './containers/Countries';
const App = () => {
  const [selectedRegion , setSelectedRegion]= useState(null)
  const onRegion = (region) =>{
    selectedRegion(region)
  }
const clearSelectedRegionHandler = () =>{
  setSelectedRegion(null)
}

  return (
    <div className="App">
     <Navbar />
     {selectedRegion ? <Countries /> : <RegionPicker />}
    </div>
  );
}

export default App;
