import React from 'react'

const Board = (props) => {
    return (
        <div>
            <div>    
                Board
            </div>
            <div>
                Score: {props.score}
            </div>
        </div>
    )
}

export default Board