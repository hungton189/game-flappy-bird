import * as types from "../constant/ActionTypes"
const initialState = "PREPARE";

const gameReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.START_GAME:
            return "PLAYING"
        case types.GAMEOVER:
            return "GAME_OVER"
        case types.PREPARE:
            return initialState
        default:
            return state;
    }
}
export default gameReducer;

//các trạng thái của game: prepare,playing,gameOver