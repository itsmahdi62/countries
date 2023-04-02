import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import RegionPicker from './containers/RegionPicker';
import Countries from './containers/Countries';
const App = () => {
  const [selectedRegion , setSelectedRegion]= useState(null)
  const onRegionPickHandler = (region) =>{
    selectedRegion(region)
  }
const  clearSelectedRegionHandler = () =>{
  setSelectedRegion(null)
}

  return (
    <div className="App">
     <Navbar />
     {selectedRegion ? <Countries clearSelectedRegionHandler={clearSelectedRegionHandler} onRegionPickHandler={selectedRegion}/> 
     : <RegionPicker  onRegionPickHandler={onRegionPickHandler}/>}
    </div>
  );
}

export default App;
