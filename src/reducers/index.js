import {combineReducers} from "redux"
import game from "./game"
import pipes from "./pipe"
import bird from "./bird";
import ground from "./ground";

const myReducer = combineReducers({
    game,
    pipes,
    bird,
    ground,
})
export default myReducer;