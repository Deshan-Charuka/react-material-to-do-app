import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

const TaskContainer = (props) => {
  const filteredTasks =
    props.selectedCombValue !== 2
      ? props.tasks.filter((d) => d.isComplete === props.selectedCombValue)
      : props.tasks;

  return (
    <Box sx={{ width: "25%" }}>
      <Stack spacing={2}>
        {filteredTasks.map((d) => {
          return (
            <Item key={d.id}>
              <Checkbox
                checked={d.isComplete === 1 ? true : false}
                onChange={(e) => {
                  d.isComplete = e.target.checked === true ? 1 : 0;
                  props.setTasks([...props.tasks]);
                }}
              />{" "}
              <span
                style={{
                  textDecoration: d.isComplete === 1 ? "line-through" : null,
                }}
              >
                {d.description}
              </span>
            </Item>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TaskContainer;
