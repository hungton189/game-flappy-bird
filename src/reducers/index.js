import {combineReducers} from "redux"
import statusGame from "./game"
import pipes from "./pipe"
import bird from "./bird";
import ground from "./ground";

const myReducer = combineReducers({
    statusGame,
    pipes,
    bird,
    ground,
})
export default myReducer;