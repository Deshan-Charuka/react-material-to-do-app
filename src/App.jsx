import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const App = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <div>1</div>
          </Grid>
          <Grid xs={12}>
          <div>2</div>
          </Grid>
          <Grid xs={12}>
          <div>3</div>
          </Grid>
        </Grid>
      </Box>
    
    )
}

export default App;