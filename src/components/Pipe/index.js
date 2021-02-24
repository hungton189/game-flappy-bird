import "./index.css"
import {useState,useEffect} from "react"
const Pipe = ({height,left})=>{
    return <div className="pipe-wrapper" style={{left: `${left}px`}}>
        <div className="pipe">
            <div className="top-pipe" style={{height:`${height}px`}}></div>
            <div className="bottom-pipe" style={{height:`${500-80-height}px`}}></div>
        </div>
    </div>
}
export default Pipe;