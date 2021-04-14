import { makeStyles } from "@material-ui/core";
import Home from "./Components/Home";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#DADED6",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home></Home>
    </div>
  );
}

export default App;
