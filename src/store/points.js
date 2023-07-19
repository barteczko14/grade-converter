import { createSlice } from "@reduxjs/toolkit";

const initialPointsState ={
    gradeTwo:'',
    gradeThree:'',
    gradeFour:'',
    gradeFive:'',
    gradeTwoRound:'',
    gradeThreeRound:'',
    gradeFourRound:'',
    gradeFiveRound:'',
    inputPoints:''
}

const pointsSlice= createSlice({
    name:'points',
    initialState:initialPointsState,
    reducers:{
        calculatePoints(state) {
            state.gradeTwo=(0.34 * state.inputPoints).toFixed(2)
            state.gradeThree=(0.51 * state.inputPoints).toFixed(2)
            state.gradeFour=(0.76 * state.inputPoints).toFixed(2)
            state.gradeFive=(0.91 * state.inputPoints).toFixed(2)
            state.gradeTwoRound=Math.ceil(state.gradeTwo * 2)/2
            state.gradeThreeRound=Math.ceil(state.gradeThree * 2)/2
            state.gradeFourRound=Math.ceil(state.gradeFour * 2)/2
            state.gradeFiveRound=Math.ceil(state.gradeFive * 2)/2
        },
        setPoints(state,action) {
            state.inputPoints = action.payload
        }
    }
})

export const pointsActions = pointsSlice.actions
export default pointsSlice.reducer