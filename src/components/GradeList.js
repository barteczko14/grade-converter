import { Fragment } from 'react'
import classes from './GradeList.module.css'
import { useSelector } from 'react-redux'
import * as Avatar from '@radix-ui/react-avatar'
import './avatarStyles.css'

const GradeList = props => {
	const pointsRoundTwo = useSelector(state => state.points.gradeTwoRound)
	const pointsRoundThree = useSelector(state => state.points.gradeThreeRound)
	const pointsRoundFour = useSelector(state => state.points.gradeFourRound)
	const pointsRoundFive = useSelector(state => state.points.gradeFiveRound)
	return (
		<Fragment>
			<div className={classes.container}>
				<Avatar.Root className='AvatarRoot'>
					<Avatar.Fallback className='AvatarFallback'>2</Avatar.Fallback>
				</Avatar.Root>
				<div className={classes.numberContainer}>{pointsRoundTwo}</div>
			</div>

			<div className={classes.container}>
				<Avatar.Root className='AvatarRoot'>
					<Avatar.Fallback className='AvatarFallback'>3</Avatar.Fallback>
				</Avatar.Root>
				<div className={classes.numberContainer}>{pointsRoundThree}</div>
			</div>

			<div className={classes.container}>
				<Avatar.Root className='AvatarRoot'>
					<Avatar.Fallback className='AvatarFallback'>4</Avatar.Fallback>
				</Avatar.Root>
				<div className={classes.numberContainer}>{pointsRoundFour}</div>
			</div>

			<div className={classes.container}>
				<Avatar.Root className='AvatarRoot'>
					<Avatar.Fallback className='AvatarFallback'>5</Avatar.Fallback>
				</Avatar.Root>
				<div className={classes.numberContainer}>{pointsRoundFive}</div>
			</div>
		</Fragment>
	)
}

export default GradeList
