import { Fragment } from 'react'
import classes from './GradeList.module.css'
const GradeList = (props) => {
	return (
		<Fragment>
			<div className={classes.container}>
				<div className={`${classes.iconContainer} ${classes.icon2}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						fill='currentColor'
						className='bi bi-2-square'
						viewBox='0 0 16 16'>
						<path d='M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z' />
						<path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z' />
					</svg>
				</div>
				<div className={classes.numberContainer}>{props.gradeTwo}</div>
			</div>

			<div className={classes.container}>
				<div className={`${classes.iconContainer} ${classes.icon3}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						fill='currentColor'
						className='bi bi-3-square'
						viewBox='0 0 16 16'>
						<path d='M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z' />
						<path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z' />
					</svg>
				</div>
				<div className={classes.numberContainer}>{props.gradeThree}</div>
			</div>

			<div className={classes.container}>
				<div className={`${classes.iconContainer} ${classes.icon4}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						fill='currentColor'
						className='bi bi-4-square'
						viewBox='0 0 16 16'>
						<path d='M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z' />
						<path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z' />
					</svg>
				</div>
				<div className={classes.numberContainer}>{props.gradeFour}</div>
			</div>

			<div className={classes.container}>
				<div className={`${classes.iconContainer} ${classes.icon5}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						fill='currentColor'
						className='bi bi-5-square'
						viewBox='0 0 16 16'>
						<path d='M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z' />
						<path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z' />
					</svg>
				</div>
				<div className={classes.numberContainer}>{props.gradeFive}</div>
			</div>
		</Fragment>
	)
}

export default GradeList
