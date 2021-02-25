import * as types from "../constant/ActionTypes"
const initialState = 200;
const birdReducer = (state = initialState,action)=>{
    switch(action.type) {
        case types.FALL:
            return state + 45;
        case types.FLY:
            return state - 200;
        default:
            return state;
    }
}
export default birdReducer;