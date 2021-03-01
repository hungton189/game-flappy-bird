import * as types from "../constant/ActionTypes"
export const addPipe = ()=> {
    return {
        type:types.ADD_PIPE
    }
}
export const updatePipe = ()=> {
    return {
        type:types.UPDATE_PIPE
    }
}
export const fall = ()=> {
    return {
        type:types.FALL
    }
}
export const fly = ()=> {
    return {
        type:types.FLY
    }
}
export const updateGround = ()=> {
    return {
        type:types.UPDATE_GROUND
    }
}
export const startGame = ()=> {
    return {
        type:types.START_GAME
    }
}
export const gameOver = ()=> {
    return {
        type:types.GAMEOVER
    }
}
export const prepare = ()=> {
    return {
        type:types.PREPARE
    }
}