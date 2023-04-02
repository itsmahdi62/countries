import "../App.css"
import { useState , useEffect } from "react";
import axios from "axios";
// import Modal from "../components/Modal/Modal";
import LinearProgress from '@mui/material/LinearProgress';
import  Container  from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import  Button  from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
            setData(response.data)
        }).catch(e=>console.log(e))
         .finally(() =>setLoading(false))
    },[selectedRegion])
    
    return ( <div>
       {/* <Modal loading={loading}/> */}
       {loading ? <div className="progress">
       <LinearProgress color="primary" />
       </div> : <Grid container spacing={3} columns={12} sx={{margin:"20px 0"}}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button color="primary" variant="contained" onClick={clearSelectedRegionHandler}>
                            Pick another region
                        </Button>
                        {data.map((country) =>{
                            <Grid item xs={12} sm={12} md={6} lg={6} key={country.name.common}>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                component="img"
                                    image={country.flags.png}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {country.name.common}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {`Population: ${country.population}`}
                                    </Typography>
                                </CardContent>
                               
                                </Card>
                </Grid>
            })}
        </Grid>
       </Grid>}
    </div>
    );
}
 
export default Countries;