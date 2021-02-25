import "./index.css"
import {useEffect} from "react"

import Bird from "../Bird/index"
import Grounds from "../Grounds/index"
import Pipe from "../Pipe/index"
import Score from "../Score/index"
import {useSelector,useDispatch} from "react-redux"
import {addPipe,updatePipe,fall,fly,updateGround} from "../../actions/index"

const Game = ()=>{
    const pipes = useSelector(state=>state.pipes);
    const heightBird = useSelector(state=>state.bird);
    const dispatch = useDispatch();
    const handleKeypress = event => {
        if(event.keyCode === 32) dispatch(fly())
    }
    useEffect(()=>{
        document.addEventListener("keypress",handleKeypress);
        setInterval(()=>{
            dispatch(fall())
        },100)
        setInterval(()=>{
            dispatch(addPipe())
        },3500)
        setInterval(()=>{
            dispatch(updatePipe())
            dispatch(updateGround())
        },90)
        console.log("abc")
    },[])
    if(heightBird >=500 || heightBird <=0) {
        // console.log("viphajm")
        document.removeEventListener("keypress",handleKeypress);
    }  
    
    const pipeElement = pipes.map((pipe,index) => {
        return <Pipe height = {pipe.height}  left={pipe.distance_y} />
    })

    return <div className="game">
        <Grounds />
        {pipeElement}
        <Bird />
        <Score />
    </div>
}
export default Game;