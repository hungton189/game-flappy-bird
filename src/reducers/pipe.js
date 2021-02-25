import * as types from "../constant/ActionTypes"
const initialState = [{height:210,distance_y:600}];


const pipeReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.ADD_PIPE:
            const newPipe = {
                height: Math.floor((Math.random() * 380)+20),
                distance_y:600
            }
            return [...state,newPipe]
        case types.UPDATE_PIPE:
            return state.map((item, index)=>{
                return {...item,distance_y:item.distance_y-10}
            })
        default:
            return state;
    }
}
export default pipeReducer;