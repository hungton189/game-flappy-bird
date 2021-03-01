import "./index.css"
import {useEffect} from "react"

import Bird from "../Bird/index"
import Grounds from "../Grounds/index"
import Pipe from "../Pipe/index"
import Score from "../Score/index"

import {connect} from "react-redux"
import * as actions from "../../actions/index"
let fallBirdLoop
let updatePipeLoop
let addPipeLoop
let checkLoop

const Game = ({pipes,startGame,flyBird})=>{
    useEffect(()=>{
        let handleKeypress = event => {
            if(event.keyCode === 32)
            {
                flyBird()
                startGame()
            }
        }
        document.addEventListener("keypress",handleKeypress);
    },[])     
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
const check = (dispatch,getState) => {
    const {bird:{heightBird}, pipes} = getState();
    if(heightBird >= 497 || heightBird <= - 50){
        console.log("vi phạm",heightBird);
        clearInterval(fallBirdLoop)
        clearInterval(addPipeLoop)
        clearInterval(updatePipeLoop)
        clearInterval(checkLoop)
        dispatch(actions.gameOver())
    }
    const challenges = pipes.map((pipe, index) => {
        return {
            x1:pipe.distance_y - 45,
            topHeight:pipe.height
        }
    })
    for(let challenge of challenges) {
        if(challenge.x1 < 180 && challenge.x1 + 105 > 180){
            if(challenge.topHeight - 10 > heightBird || challenge.topHeight + 120 < heightBird){

                console.log("vi phạm1",challenge.x1);
                clearInterval(fallBirdLoop)
                clearInterval(addPipeLoop)
                clearInterval(updatePipeLoop)
                clearInterval(checkLoop)
                dispatch(actions.gameOver())
            }
        }
    }
}
const startGame = () => {
    return (dispatch,getState) => {
        const {statusGame} = getState();
        if(statusGame === "PREPARE") {
            dispatch(actions.startGame())
            fallBirdLoop =  setInterval(()=>{
                dispatch(actions.fall())
            },75)
            addPipeLoop = setInterval(()=>{
                dispatch(actions.addPipe())
            },3000)
            updatePipeLoop = setInterval(()=>{
                dispatch(actions.updatePipe())
                dispatch(actions.updateGround())
            },70)
            checkLoop =  setInterval(() => {
                check(dispatch,getState)
            }, 150);
        }
        else if(statusGame === "GAME_OVER"){
            dispatch(actions.prepare())
        }
    }
}
const flyBird = () => {
    return (dispatch,getState) => {
        const {statusGame} = getState();
        if(statusGame === "PLAYING"){
            dispatch(actions.fly())
        }
    }
}

const mapStateToProps = ({pipes}) => ({pipes})
const mapDispatchToProps = {startGame,flyBird}
export default connect(mapStateToProps, mapDispatchToProps) (Game);