import * as types from "../constant/ActionTypes"
const initialState = 0;

const scoreReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.PREPARE:
            return initialState
        case types.INCREASE_SCORE:
            return state + 1
        default:
            return state;
    }
}
export default scoreReducer;