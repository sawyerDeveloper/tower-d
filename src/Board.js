import React, { Component } from 'react'

class Board extends Component {

    constructor(props){
        super(props)
        this.canvas = null
        this.lineY = 0
    }

    update = (data) => {

        this.canvas.getContext('2d').clearRect(0, 0, 600, 600)

        data.enemies.forEach(enemy => {
            this.canvas.getContext('2d').beginPath()
            this.canvas.getContext('2d').strokeStyle = enemy.color
            this.canvas.getContext('2d').lineWidth = enemy.height

            this.canvas.getContext('2d').moveTo(enemy.x, this.lineY)
            this.canvas.getContext('2d').lineTo(enemy.x + enemy.width, this.lineY)
            this.canvas.getContext('2d').stroke()
        })
        
        if (this.lineY >= 600) {
        this.lineY = 0
        }
        this.lineY += 6
    }

    render() {

        const styles = {
            container: {
                width: 600,
                height: 600
            }
        }

        return (
            <canvas width={styles.container.width} height={styles.container.height} ref={canvas => this.canvas = canvas} />
        )
    }
}

export default Board