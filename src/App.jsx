import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import InputForm from "./InputForm";
import TaskContainer from "./TaskContainer";

const initialTasks = [
  { id: 1, description: "Read a book", isComplete: 1 },
  { id: 2, description: "Collecting Stamps", isComplete: 1 },
  { id: 3, description: "Doing Nothing", isComplete: 0 },
];

const statusOptions = [
  { label: "Completed", id: 1 },
  { label: "Pending", id: 0 },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedComboValue, setSelectedComboValue] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid xs={12}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={statusOptions}
            sx={{ width: 300 }}
            value={selectedComboValue}
            onChange={(newValue) => {
              setSelectedComboValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
        </Grid>
        <Grid xs={12}>
          <TaskContainer
            tasks={tasks}
            setTasks={setTasks}
            selectedCombValue={selectedComboValue}
          />
        </Grid>
        <Grid xs={12}>
          <InputForm tasks={tasks} setTasks={setTasks} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
