import { Container, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Form from "./Form";
import NotesList from "./NotesList";

const useStyles = makeStyles((theme) => {
  return {
    top: {
      padding: theme.spacing(5),
      backgroundColor: "#C7D8D5",
    },
  };
});

const Home = () => {
  const [Notes, setNotes] = useState([]);
  const [Group, setGroup] = useState("All");
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" gutterBottom className={classes.top}>
        Rajorshi's To Do List
      </Typography>
      <Form
        Notes={Notes}
        setNotes={setNotes}
        setGroup={setGroup}
        Group={Group}
      />
      <NotesList Notes={Notes} setNotes={setNotes} Group={Group} />
    </Container>
  );
};

export default Home;
