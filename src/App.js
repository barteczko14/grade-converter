import "./App.css";
import { Fragment } from "react";
import GradeList from "./components/GradeList";
import classes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { pointsActions } from "./store/points";
const App = () => {
  const dispatch = useDispatch();
  const inputPoints = useSelector((state) => state.points.inputPoints);
  const pointsTwo = useSelector((state) => state.points.gradeTwo);
  const pointsThree = useSelector((state) => state.points.gradeThree);
  const pointsFour = useSelector((state) => state.points.gradeFour);
  const pointsFive = useSelector((state) => state.points.gradeFive);
  const calculatePointsHandler = () => {
    dispatch(pointsActions.calculatePoints());
  };

  const setPointsHandler = (event) => {
    dispatch(pointsActions.setPoints(event.target.value));
  };

  return (
    <Fragment>
      <main className={classes.wrapper}>
        <h1 className={classes.title}>Podaj maksymalną liczbę punktów</h1>
        <input
          onChange={setPointsHandler}
          className={classes.input}
          type="number"
        ></input>
        <button onClick={calculatePointsHandler} className={classes.button}>
          Oblicz!
        </button>
        <GradeList
          gradeTwo={pointsTwo}
          gradeThree={pointsThree}
          gradeFour={pointsFour}
          gradeFive={pointsFive}
        ></GradeList>
      </main>
    </Fragment>
  );
};

export default App;
