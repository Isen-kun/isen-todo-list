import { TurnedInTwoTone } from "@material-ui/icons";
import { useState } from "react";
import {
  FormControl,
  IconButton,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";

const Form = ({ Notes, setNotes, setGroup, Group }) => {
  const [Input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...Notes,
      {
        id: uuid(),
        text: Input,
        group: "InComp",
      },
    ]);
    setInput("");
    e.target.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setInput(e.target.value)}
        label="Enter Note"
        variant="filled"
        required
        style={{ width: "50%" }}
      />
      <IconButton aria-label="submit" type="submit" style={{ padding: 15 }}>
        <TurnedInTwoTone fontSize="large" />
      </IconButton>
      <FormControl variant="filled" style={{ width: "15%" }}>
        <InputLabel id="filter">Filter</InputLabel>
        <Select value={Group} onChange={(e) => setGroup(e.target.value)}>
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Comp"}>Completed</MenuItem>
          <MenuItem value={"InComp"}>Incompleted</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
