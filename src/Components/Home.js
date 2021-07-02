import { Container, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Form from "./Form";
import NotesList from "./NotesList";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => {
  return {
    top: {
      padding: theme.spacing(3),
      backgroundColor: "#C7D8D5",
    },
  };
});

const Home = () => {
  const [localNotes, setLocalNotes] = useState([]);
  const [Group, setGroup] = useState("All");
  const [change, setChange] = useState(0);
  const classes = useStyles();

  const setNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setChange(change + 1);
  };

  useEffect(() => {
    const getLocal = () => {
      const localData = localStorage.getItem("notes");
      setLocalNotes(JSON.parse(localData));
    };
    getLocal();
  }, [change]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom className={classes.top}>
        Your To Do List
      </Typography>
      <Form
        Notes={localNotes}
        setNotes={setNotes}
        setGroup={setGroup}
        Group={Group}
      />
      <NotesList Notes={localNotes} setNotes={setNotes} Group={Group} />
      <Footer />
    </Container>
  );
};

export default Home;
