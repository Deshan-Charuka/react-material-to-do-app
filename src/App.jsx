import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ComboBox from "./ComboBox";
import InputForm from "./InputForm";
import TaskContainer from "./TaskContainer";

const initialTasks = [
  { id: 1, description: "Read a book", isComplete: 1 },
  { id: 2, description: "Collecting Stamps", isComplete: 1 },
  { id: 3, description: "Doing Nothing", isComplete: 2 },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid xs={12}>
          <ComboBox />
        </Grid>
        <Grid xs={12}>
          <TaskContainer tasks={tasks} setTasks={setTasks}/>
        </Grid>
        <Grid xs={12}>
          <InputForm tasks={tasks} setTasks={setTasks} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
