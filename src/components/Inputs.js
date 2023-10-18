import React from 'react';
import classes from './Inputs.module.css'
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { pointsActions } from "../store/points";
const Inputs = () => {
    const dispatch = useDispatch();

    const setTwoInputHandler = (event) => {
      dispatch(pointsActions.setInputTwo(event.target.value));
      dispatch(pointsActions.calculatePoints());
    };
    const setThreeInputHandler = (event) => {
      dispatch(pointsActions.setInputThree(event.target.value));
      dispatch(pointsActions.calculatePoints());
    };
    const setFourInputHandler = (event) => {
      dispatch(pointsActions.setInputFour(event.target.value));
      dispatch(pointsActions.calculatePoints());
    };
    const setFiveInputHandler = (event) => {
      dispatch(pointsActions.setInputFive(event.target.value));
      dispatch(pointsActions.calculatePoints());
    };
    const inputTwo = useSelector((state)=>state.points.inputTwo)
    const inputThree = useSelector((state)=>state.points.inputThree)
    const inputFour = useSelector((state)=>state.points.inputFour)
    const inputFive = useSelector((state)=>state.points.inputFive)

  return (
    <div className={classes.inputsContainer}>
      <div className="input-container">
        <div className={classes.inputTitle}>
          2
        </div>
        <input onChange={setTwoInputHandler} className={classes.inputPercent} type="number" placeholder={inputTwo} />
      </div>
      <div className="input-container">
        <div className={classes.inputTitle}>
          3
        </div>
        <input onChange={setThreeInputHandler} className={classes.inputPercent} type="number" placeholder={inputThree}/>
      </div>
      <div className="input-container">
        <div className={classes.inputTitle}>
          4
        </div>
        <input onChange={setFourInputHandler} className={classes.inputPercent} type="number" placeholder={inputFour}/>
      </div>
      <div className="input-container">
        <div className={classes.inputTitle}>
          5
        </div>
        <input onChange={setFiveInputHandler} className={classes.inputPercent} type="number" placeholder={inputFive}/>
      </div>
    </div>
  );
};

export default Inputs;
