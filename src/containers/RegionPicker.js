import "../App"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from "react";
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material";
import AfricaImage from "../asset/africa-ge3907c48e_1920.jpg"
import AsiaImage from "../asset/Asia_(orthographic_projection).svg.png"
import europe from "../asset/europe-g6a31036fc_1920.png"
import northAmerika from "../asset/map-ge236e9576_1280.png"
import southAmerika from "../asset/south-america-gb1c4ca71c_1920.jpg"
const RegionPicker = ({onRegionPickHandler}) => {
    return (
        <div>         
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ffffff',
            height: '90vh',
            display:"flex" ,
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            margin:"300px 0 10px 0",
        }}>
        <Grid container spacing={1} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="region-container" onClick={()=>onRegionPickHandler('asia')}>
              <img src={AsiaImage} alt="#" />
              <Typography variant="h4">Asia</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="region-container" onClick={()=>onRegionPickHandler('africa')}>
              <img src={AfricaImage} alt="#" />
              <Typography variant="h4">Africa</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="region-container" onClick={()=>onRegionPickHandler('europe')}>
              <img src={europe} alt="#" />
              <Typography variant="h4">Europe</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="region-container" onClick={()=>onRegionPickHandler('americas')}>
              <img src={southAmerika} alt="#" />
              <Typography variant="h4">South America</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="region-container" onClick={()=>onRegionPickHandler('americas')}>
              <img src={northAmerika} alt="#" />
              <Typography variant="h4">North America</Typography>
            </div>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
        </div>
    );
}
 
export default RegionPicker;