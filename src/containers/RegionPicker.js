import "../App"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from "react";
import Countries from "./Countries";
import Grid from "@mui/material/Grid"
// import AfricaImage
const RegionPicker = () => {
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
            margin:"10px 0"
        }}>
        <Grid container spacing={1} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div>
              
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