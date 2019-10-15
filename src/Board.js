import React, { Component } from 'react'

class Board extends Component {

    constructor(props){
        super(props)
        this.canvas = null
    }

    update = (data) => {

        this.canvas.getContext('2d').clearRect(0, 0, 600, 600)

        data.enemies.forEach(enemy => {
            this.canvas.getContext('2d').beginPath()
            this.canvas.getContext('2d').strokeStyle = enemy.style.color
            this.canvas.getContext('2d').lineWidth = enemy.body.height

            this.canvas.getContext('2d').moveTo(enemy.position.x, enemy.position.y)
            this.canvas.getContext('2d').lineTo(enemy.position.x + enemy.body.width, enemy.position.y)
            this.canvas.getContext('2d').stroke()
        })
        
    }

    render() {

        const styles = {
            container: {
                width: 600,
                height: 600
            }
        }

        return (
            <canvas onMouseDown={this.props.applyUserInput} 
                    onMouseUp={this.props.removeUserInput} 
                    width={styles.container.width} 
                    height={styles.container.height} 
                    ref={canvas => this.canvas = canvas} />
        )
    }
}

export default Board