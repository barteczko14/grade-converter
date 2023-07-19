import "./App.css";
import { Fragment } from "react";
import GradeList from "./components/GradeList";
import classes from "./App.module.css";
import { useDispatch } from "react-redux";
import { pointsActions } from "./store/points";
import Inputs from "./components/Inputs";
const App = () => {
  const dispatch = useDispatch();

  const setPointsHandler = (event) => {
    dispatch(pointsActions.setPoints(event.target.value));
    dispatch(pointsActions.calculatePoints());
  };

  return (
    <Fragment>
      <main className={classes.wrapper}>
        <Inputs></Inputs>
        <h1 className={classes.title}>Podaj maksymalną liczbę punktów</h1>
        <input
          onChange={setPointsHandler}
          className={classes.input}
          type="number"
        ></input>
        <GradeList></GradeList>
      </main>
    </Fragment>
  );
};

export default App;
