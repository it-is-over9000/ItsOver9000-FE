import React from 'react'

class Board extends React.Component {
    constructor() {
        super()
    }

    render() {
        const board1 = ChessBoard('board1', 'start')
        return(
        <div id ="board1" style="width: 400px"></div> 
        )
    }
}