import { createSlice } from "@reduxjs/toolkit";

const initialPointsState ={
    gradeTwo:'',
    gradeThree:'',
    gradeFour:'',
    gradeFive:'',
    inputPoints:''
}

const pointsSlice= createSlice({
    name:'points',
    initialState:initialPointsState,
    reducers:{
        calculatePoints(state) {
            state.gradeTwo=(0.31 * state.inputPoints).toFixed(2)
            state.gradeThree=(0.51 * state.inputPoints).toFixed(2)
            state.gradeFour=(0.75 * state.inputPoints).toFixed(2)
            state.gradeFive=(0.9 * state.inputPoints).toFixed(2)
        },
        setPoints(state,action) {
            state.inputPoints = action.payload
        }
    }
})

export const pointsActions = pointsSlice.actions
export default pointsSlice.reducer