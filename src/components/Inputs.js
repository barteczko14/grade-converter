import React from 'react'
import classes from './Inputs.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { pointsActions } from '../store/points'
import * as Avatar from '@radix-ui/react-avatar'
import './inputStyles.css'
const Inputs = () => {
	const dispatch = useDispatch()

	const setTwoInputHandler = event => {
		dispatch(pointsActions.setInputTwo(event.target.value))
		dispatch(pointsActions.calculatePoints())
	}
	const setThreeInputHandler = event => {
		dispatch(pointsActions.setInputThree(event.target.value))
		dispatch(pointsActions.calculatePoints())
	}
	const setFourInputHandler = event => {
		dispatch(pointsActions.setInputFour(event.target.value))
		dispatch(pointsActions.calculatePoints())
	}
	const setFiveInputHandler = event => {
		dispatch(pointsActions.setInputFive(event.target.value))
		dispatch(pointsActions.calculatePoints())
	}
	const inputTwo = useSelector(state => state.points.inputTwo)
	const inputThree = useSelector(state => state.points.inputThree)
	const inputFour = useSelector(state => state.points.inputFour)
	const inputFive = useSelector(state => state.points.inputFive)

	return (
		<div className={classes.inputsContainer}>
			<div className={classes.inputContainer}>
				<Avatar.Root className='InputRoot'>
					<Avatar.Fallback className='InputFallback'>2</Avatar.Fallback>
				</Avatar.Root>
				<input onChange={setTwoInputHandler} className={classes.inputPercent} type='number' placeholder={inputTwo} />
			</div>
			<div className={classes.inputContainer}>
				<Avatar.Root className='InputRoot'>
					<Avatar.Fallback className='InputFallback'>3</Avatar.Fallback>
				</Avatar.Root>
				<input
					onChange={setThreeInputHandler}
					className={classes.inputPercent}
					type='number'
					placeholder={inputThree}
				/>
			</div>
			<div className={classes.inputContainer}>
				<Avatar.Root className='InputRoot'>
					<Avatar.Fallback className='InputFallback'>4</Avatar.Fallback>
				</Avatar.Root>
				<input onChange={setFourInputHandler} className={classes.inputPercent} type='number' placeholder={inputFour} />
			</div>
			<div className={classes.inputContainer}>
				<Avatar.Root className='InputRoot'>
					<Avatar.Fallback className='InputFallback'>5</Avatar.Fallback>
				</Avatar.Root>
				<input onChange={setFiveInputHandler} className={classes.inputPercent} type='number' placeholder={inputFive} />
			</div>
		</div>
	)
}

export default Inputs
