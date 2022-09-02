import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultValues = {
  taskDescription: "",
};

const InputForm = () => {
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
    console.log(formValues);
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
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default InputForm;
