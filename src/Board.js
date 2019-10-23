import React, { Component } from 'react'

class Board extends Component {

    constructor(props){
        super(props)
        this.canvas = null
    }

    update = (data) => {
        this.canvas.getContext('2d').clearRect(0, 0, 600, 600)

        data.forEach(entity => {
            this.drawEntity(entity)
        })
        
    }

    /**
     * Draws each object on the screen from data
     */
    drawEntity = (entity) => {
        switch(entity.body.shape){
            case 'rectangle' :
                this.canvas.getContext('2d').beginPath()
                this.canvas.getContext('2d').strokeStyle = entity.style.color
                this.canvas.getContext('2d').lineWidth = entity.body.height
                this.canvas.getContext('2d').moveTo(entity.position.x, entity.position.y)
                this.canvas.getContext('2d').lineTo(entity.position.x + entity.body.width, entity.position.y)
                this.canvas.getContext('2d').stroke()
            break
            case 'circle' :

            break
        }
    }

    render() {

        return (
            <canvas onMouseDown={this.props.applyUserInput} 
                    onMouseUp={this.props.removeUserInput} 
                    onMouseOut={this.props.removeUserInput} 
                    width={600} 
                    height={600} 
                    ref={canvas => this.canvas = canvas} />
        )
    }
}

export default Board