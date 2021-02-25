import "./index.css"
import {useSelector} from "react-redux"
const Grounds = ()=>{
    const left = useSelector(state=>state.ground)
    return <div className="ground-wrapper" style={{left: `${left}px`}}>
        <div className="ground"></div>
    </div>
}
export default Grounds;