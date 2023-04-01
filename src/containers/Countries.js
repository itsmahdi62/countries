import "../App.css"
import { useState , useEffect } from "react";
import axios from "axios";
const Countries = ({clearSelectedRegionHandler,selectedRegion}) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    
    useEffect( ()=>{
        setLoading(true);
        axios({
            method:"GET",
            url: `https://restcountries.com/v3.1/region/${selectedRegion}`
        }).then(response =>{
            setData(response.data)
            console.log(response)
        }).catch(e=>console.log(e))
        .finally(() =>setLoading(false))
    },[selectedRegion])
    
    return ( <div>
    </div>
    );
}
 
export default Countries;