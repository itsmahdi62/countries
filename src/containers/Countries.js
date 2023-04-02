import "../App.css"
import { useState , useEffect } from "react";
import axios from "axios";
// import Modal from "../components/Modal/Modal";
import LinearProgress from '@mui/material/LinearProgress';
import { Container } from "@mui/material";
const Countries = ({clearSelectedRegionHandler,selectedRegion}) => {
    
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    console.log(selectedRegion)
    
    useEffect( ()=>{
        setLoading(true);
        axios({
            method:"GET",
            url: `https://restcountries.com/v3.1/region/${selectedRegion}`
        }).then(response =>{
            console.log(response.data)
            setData(response.data)
        }).catch(e=>console.log(e))
         .finally(() =>setLoading(false))
    },[selectedRegion])
    
    return ( <div>
       {/* <Modal loading={loading}/> */}
       {loading ? <div className="progress">
       <LinearProgress color="primary" />
       </div> : null}
    </div>
    );
}
 
export default Countries;