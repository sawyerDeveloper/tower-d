import React, { Component } from 'react'

class Board extends Component {

    constructor(props){
        super(props)
        this.canvas = null
    }

    update = (data) => {
        this.canvas.getContext('2d').clearRect(0, 0, this.props.width, this.props.height)
        data.forEach(entity => {
            entity.render(this.canvas.getContext('2d'))
        })
    }

    render() {

        return (
            <canvas onMouseDown={this.props.applyUserInput} 
                    onMouseUp={this.props.removeUserInput} 
                    onMouseOut={this.props.removeUserInput} 
                    width={this.props.width} 
                    height={this.props.height} 
                    ref={canvas => this.canvas = canvas} />
        )
    }
}

export default Board