import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import Form from "./Form";
import NotesList from "./NotesList";

const Home = () => {
  const [Notes, setNotes] = useState([]);
  const [Group, setGroup] = useState("All");

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
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
