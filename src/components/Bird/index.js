import "./index.css"
import {useSelector} from "react-redux"
const Bird = ()=>{
    const {heightBird,statusBird} = useSelector(state=>state.bird)
    const statusGame = useSelector(state=>state.statusGame)
    let rotate
    switch (statusBird){
        case "PREPARE":
            rotate = 0
            break
        case "FALL":
            rotate = 50
            break
        case "FLY":
            rotate = -35
    }
    var height = heightBird
    if(statusGame === "GAME_OVER")
    {
        height = 460
        rotate = 70
    }
    return <div className="bird-wrapper" style={{top:`${height}px`,transform: `rotate(${rotate}deg)`}}>
        <div className="bird"></div>
    </div>
}
export default Bird;