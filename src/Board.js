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
        const ctx = this.canvas.getContext('2d')
        switch(entity.body.shape){
            case 'rectangle' :
                ctx.beginPath()
                ctx.strokeStyle = entity.style.color
                ctx.lineWidth = 1//entity.body.height
                ctx.strokeRect(entity.position.x, entity.position.y, entity.body.width, entity.body.height)
                ctx.stroke()
            break
            case 'circle' :
                ctx.beginPath();
                ctx.strokeStyle = entity.style.color
                ctx.lineWidth = 1//1entity.body.height
                ctx.arc(entity.position.x, entity.position.y, ((entity.body.width + entity.body.height) / 2), 0, Math.PI * 2, true)
                ctx.stroke();
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