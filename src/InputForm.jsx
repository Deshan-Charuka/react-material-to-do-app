import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultValues = {
  taskDescription: "",
};

const InputForm = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formValues.taskDescription !== null ||
      formValues.taskDescription !== ""
    ) {
      props.setTasks([
        ...props.tasks,
        {
          id: props.tasks.length + 1,
          description: formValues.taskDescription,
          isComplete: 0,
        },
      ]);
    }
    setFormValues(defaultValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "17ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="task-description-input"
        label="Task"
        variant="filled"
        name="taskDescription"
        type="text"
        value={formValues.taskDescription}
        onChange={handleInputChange}
        size="small"
      />
      <Button variant="contained" color="primary" type="submit" size="large">
        + ADD
      </Button>
    </Box>
  );
};

export default InputForm;
