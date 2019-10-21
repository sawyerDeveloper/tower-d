

class Enemy {
    constructor(data, stage){
        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown'} */
        this.style = data.style
        /** { velocity: 1, x: 0, y: 1, path: 'random' } */
        this.vector = data.vector
        /** {hit: false} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position
        /** 'random' or [[1,0],[1,1],[2,1]] */
        this.path = data.path

        this.vectorTimer = ( Math.random() * 60) + 10
    }

    update = () => {
        this.position.y += (this.vector.y * this.vector.velocity)
        this.position.x += (this.vector.x * this.vector.velocity)
        
        if (this.position.y > 615) {
            this.position.y = -30
        }
        if (this.position.y < -30) {
            this.position.y = 615
        }
        if (this.position.x > 615) {
            this.position.x = -30
        }
        if (this.position.x < -30) {
            this.position.x = 615
        }

        this.updatePath()
    }

    /** 
     * Dynamically change the vectors based on the path configuration 
     */
    updatePath = () => {

        this.vectorTimer--
        if(this.vectorTimer <= 1){
            this.vectorTimer = ( Math.random() * 60) + 10
            if(this.path === 'random'){
                this.vector.velocity = Math.random() * 6
                this.vector.x = (Math.random() * 2) - 1
                this.vector.y = (Math.random() * 2) - 1
                
            }
        }
    }
}

export default Enemy