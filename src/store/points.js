import { createSlice } from '@reduxjs/toolkit'

const initialPointsState = {
	inputTwo: 0.3,
	inputThree: 0.5,
	inputFour: 0.75,
	inputFive: 0.9
}

const pointsSlice = createSlice({
	name: 'points',
	initialState: initialPointsState,
	reducers: {
		calculatePoints(state) {
			state.gradeTwoRound = Math.ceil((state.inputTwo * state.inputPoints).toFixed(2) * 2) / 2
			state.gradeThreeRound = Math.ceil((state.inputThree * state.inputPoints).toFixed(2) * 2) / 2
			state.gradeFourRound = Math.ceil((state.inputFour * state.inputPoints).toFixed(2) * 2) / 2
			state.gradeFiveRound = Math.ceil((state.inputFive * state.inputPoints).toFixed(2) * 2) / 2
		},
		setPoints(state, action) {
			state.inputPoints = action.payload
		},
		setInputTwo(state, action) {
			state.inputTwo = action.payload
		},
		setInputThree(state, action) {
			state.inputThree = action.payload
		},
		setInputFour(state, action) {
			state.inputFour = action.payload
		},
		setInputFive(state, action) {
			state.inputFive = action.payload
		},
	},
})

export const pointsActions = pointsSlice.actions
export default pointsSlice.reducer
