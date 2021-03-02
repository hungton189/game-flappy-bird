import {combineReducers} from "redux"
import statusGame from "./game"
import pipes from "./pipe"
import bird from "./bird";
import ground from "./ground";
import score from "./score"

const myReducer = combineReducers({
    statusGame,
    pipes,
    bird,
    ground,
    score
})
export default myReducer;