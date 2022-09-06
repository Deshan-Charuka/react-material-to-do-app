import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  { label: "All", id: 2 },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedComboValue, setSelectedComboValue] = useState(2);

  const handleChange = (event) => {
    setSelectedComboValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid xs={12}>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedComboValue}
                label="Please select an option"
                onChange={handleChange}
              >
                {statusOptions.map((option) => {
                  return <MenuItem value={option.id}>{option.label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
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
