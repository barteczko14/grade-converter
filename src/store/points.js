import { createSlice } from "@reduxjs/toolkit";

const initialPointsState ={
    gradeTwo:'',
    gradeThree:'',
    gradeFour:'',
    gradeFive:'',
    inputTwo:0.34,
    inputThree:0.5,
    inputFour:0.75,
    inputFive:0.91,
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
            state.gradeTwo=(state.inputTwo * state.inputPoints).toFixed(2)
            state.gradeThree=(state.inputThree * state.inputPoints).toFixed(2)
            state.gradeFour=(state.inputFour * state.inputPoints).toFixed(2)
            state.gradeFive=(state.inputFive * state.inputPoints).toFixed(2)
            state.gradeTwoRound=Math.ceil(state.gradeTwo * 2)/2
            state.gradeThreeRound=Math.ceil(state.gradeThree * 2)/2
            state.gradeFourRound=Math.ceil(state.gradeFour * 2)/2
            state.gradeFiveRound=Math.ceil(state.gradeFive * 2)/2
        },
        setPoints(state,action) {
            state.inputPoints = action.payload
        },
        setInputTwo(state,action) {
            state.inputTwo=action.payload
        },
        setInputThree(state,action) {
            state.inputThree=action.payload
        },
        setInputFour(state,action) {
            state.inputFour=action.payload
        },
        setInputFive(state,action) {
            state.inputFive=action.payload
        }
    }
})

export const pointsActions = pointsSlice.actions
export default pointsSlice.reducer