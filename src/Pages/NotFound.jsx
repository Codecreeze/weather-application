import React from 'react';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';


function NotFound() {
  return (
    <div style={{ minHeight: "101vh", backgroundColor: "#bbd0f7", marginTop:10 }} className="Error_Image">
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: "80vh", paddingLeft: 20, paddingRight: 20 }}>

        <Grid item xs={12} sm={8} md={12} lg={12} xl={12}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

            <Typography variant='h1' sx={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>
              404! Page Not Found
            </Typography>

          </Box>
        </Grid>

      </Grid>
    </div>
  )
}

export default NotFound;