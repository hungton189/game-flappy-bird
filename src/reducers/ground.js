import * as types from "../constant/ActionTypes"
const initialState = 0;
const groundReducer = (state = initialState,action)=>{
    switch(action.type) {
        case types.UPDATE_GROUND:
            return state - 10;
        case types.PREPARE:
            return initialState
        default:
            return state;
    }
}
export default groundReducer;