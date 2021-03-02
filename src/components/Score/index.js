import "./index.css"
import {useSelector} from "react-redux"
const Score = ()=>{
    const score = useSelector(state=>state.score)
    return <div className="score">
        {score}
    </div>
}
export default Score;