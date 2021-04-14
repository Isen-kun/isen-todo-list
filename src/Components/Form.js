import { TurnedIn } from "@material-ui/icons";
import { useState } from "react";
import {
  FormControl,
  IconButton,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const Form = ({ Notes, setNotes, setGroup, Group }) => {
  const [Input, setInput] = useState("");
  const [Id, setID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setID(Id + 1);
    setNotes([
      ...Notes,
      {
        id: Id,
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
        label="Note"
        variant="filled"
        required
      />
      <IconButton aria-label="submit" type="submit">
        <TurnedIn />
      </IconButton>
      <FormControl variant="filled">
        <InputLabel id="filter">Filter</InputLabel>
        <Select value={Group} onChange={(e) => setGroup(e.target.value)}>
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Comp"}>Completed</MenuItem>
          <MenuItem value={"InComp"}>In-Completed</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
