import './App.css';
import { Fragment } from 'react';
import GradeList from './components/GradeList';
import classes from './App.module.css'

const App = () => {

  return (
	<Fragment >
		<main className={classes.wrapper}>
    	<h1>Podaj maksymalną liczbę punktów</h1>
    	<input type="number"></input>
    	<button>Oblicz!</button>
		<GradeList></GradeList>
		</main>
	</Fragment>
  );
}

export default App;
