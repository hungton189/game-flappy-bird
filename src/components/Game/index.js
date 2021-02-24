import "./index.css"
import {useEffect} from "react"

import Bird from "../Bird/index"
import Grounds from "../Grounds/index"
import Pipe from "../Pipe/index"
import Score from "../Score/index"
import {useSelector,useDispatch} from "react-redux"
import {addPipe,updatePipe} from "../../actions/index"

const Game = ()=>{
    const pipes = useSelector(state=>state.pipes);
    const dispatch = useDispatch();
    //sau 0.3.2s thêm 1 cột mới vào mảng pipes ở store
    useEffect(()=>{
        setInterval(()=>{
            dispatch(addPipe())
        },3000)
        setInterval(()=>{
            dispatch(updatePipe())
        },100)
    },[])

    const pipeElement = pipes.map((pipe,index) => {
        return <Pipe height = {pipe.height}  left={pipe.distance_y} />
    })
    console.log("render")

    return <div className="game">
        <Bird />
        <Grounds />
        {pipeElement}
        <Score />
    </div>
}
export default Game;