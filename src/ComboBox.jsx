import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const statusOptions = [
  { label: "Completed", id: 1 },
  { label: "Pending", id: 2 }
];

const ComboBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={statusOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Status" />}
    />
  );
};

export default ComboBox;
