import * as types from "../constant/ActionTypes"
const initialState = {heightBird:200,statusBird:"PREPARE"};
const birdReducer = (state = initialState,action)=>{
    switch(action.type) {
        case types.FALL:
            return {
                heightBird:state.heightBird + 30,
                statusBird:"FLY"
            };
        case types.FLY:
            return {
                heightBird:state.heightBird - 140,
                statusBird:"FLY"
            };
        case types.PREPARE:
            return initialState
        default:
            return state;
    }
}
export default birdReducer;