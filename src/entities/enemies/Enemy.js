class Enemy {
    constructor(data){
        this.data = data
        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body 
        /** {color: 'brown'} */
        this.style = data.style
        /** { velocity: 1, x: 0, y: 1, path: 'random' } */
        this.vector = data.vector
        /** {hit: false} */
        this.state = data.state
        /** {x: 0, y: 20}  */
        this.position = data.position
        /** 'random' or [[1,0],[1,1],[2,1]] */
        this.path = data.path
    }

    update = () => {
        this.position.y += (this.vector.y * this.vector.velocity)
            if (this.position.y > 615) {
                this.position.y = -30
            }

    }
}

export default Enemy