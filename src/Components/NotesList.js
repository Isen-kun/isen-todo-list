import {
  Box,
  ListItem,
  List,
  ListItemText,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red, teal } from "@material-ui/core/colors";
import { Delete, DoneOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  completed: {
    textDecoration: "line-through",
    backgroundColor: teal[300],
  },
  incompleted: {
    backgroundColor: red[300],
  },
  text: {
    fontSize: "10rem",
  },
});

const NotesList = ({ Notes, setNotes, Group }) => {
  const classes = useStyles();

  const [FilteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
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
          <div key={note.id}>
            <ListItem divider>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="body1" style={{ fontWeight: 500 }}>
                    {note.text}
                  </Typography>
                }
                className={`${
                  note.group === "Comp"
                    ? classes.completed
                    : classes.incompleted
                }`}
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
