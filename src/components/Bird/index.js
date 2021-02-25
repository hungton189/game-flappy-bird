import "./index.css"
import {useSelector} from "react-redux"
const Bird = ()=>{
    const height = useSelector(state=>state.bird)
    return <div className="bird-wrapper" style={{top:`${height}px`}}>
        <div className="bird"></div>
    </div>
}
export default Bird;