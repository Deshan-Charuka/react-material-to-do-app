import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ComboBox from "./ComboBox";
import InputForm from "./InputForm";
import TaskContainer from "./TaskContainer";

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid xs={12}>
          <ComboBox />
        </Grid>
        <Grid xs={12}>
        <TaskContainer />
        </Grid>
        <Grid xs={12}>
          <InputForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
