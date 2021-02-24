import {combineReducers} from "redux"
import game from "./game"
import pipes from "./pipe"

const myReducer = combineReducers({
    game,
    pipes,
})
export default myReducer;