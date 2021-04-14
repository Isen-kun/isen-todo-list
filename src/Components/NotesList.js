import {
  Box,
  ListItem,
  List,
  ListItemText,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Delete, DoneOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  completed: {
    textDecoration: "line-through",
  },
});

const NotesList = ({ Notes, setNotes, Group }) => {
  const classes = useStyles();

  const [FilteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    console.log(Group);
    if (Group === "All") {
      setFilteredNotes(Notes);
    } else {
      const newNotes = Notes.filter((note) => note.group === Group);
      setFilteredNotes(newNotes);
    }
  }, [Group, Notes]);

  const handleComplete = (id) => {
    setNotes(
      Notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            group: "Comp",
          };
        }
        return note;
      })
    );
  };

  const handleDelete = (id) => {
    const newNotes = Notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Box>
      <List>
        {FilteredNotes.map((note) => (
          <div className="list-item" key={note.id}>
            <ListItem divider>
              <ListItemText
                primary={note.text}
                className={`${note.group === "Comp" ? classes.completed : ""}`}
              />
              <IconButton
                aria-label="complete"
                onClick={() => handleComplete(note.id)}
              >
                <DoneOutlined />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(note.id)}
              >
                <Delete />
              </IconButton>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default NotesList;
