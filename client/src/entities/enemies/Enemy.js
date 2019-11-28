import Entity from '../Entity'

class Enemy extends Entity{
    constructor(data) {
        super(data)
        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown'} */
        this.style = data.style
        /** { velocity: 1, x: 0, y: 1} */
        this.vector = data.vector
        /** {hit: false} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position
        /** 'random' or [[1,0],[1,1],[2,1]] */
        this.path = data.path

        this.children = data.children

        if(this.path === 'random'){
            this.vectorTimer = (Math.random() * 60) + 10
        }
    }

    update(stage){

        this.position.y += (this.vector.y * this.vector.velocity)
        this.position.x += (this.vector.x * this.vector.velocity)

        if (this.position.y > stage.height) {
            this.position.y = -30
        }
        if (this.position.y < -30) {
            this.position.y = stage.height
        }
        if (this.position.x > stage.width) {
            this.position.x = -30
        }
        if (this.position.x < -30) {
            this.position.x = stage.width
        }

        this.updatePath()
    }

    hit = () => {
        this.style.color = 'white'
        this.state.hit = true
        this.vector.velocity = 0
    }

    /**
     * @returns {boolean} If the point is over this object, return true, otherwise false
     */
    hitTest(x, y){
        return super.hitTest(x, y)
    }

    /** 
     * Dynamically change the vectors based on the path configuration 
     */
    updatePath(){
        if (this.path === 'random') {
            this.vectorTimer--
            if (this.vectorTimer <= 1) {
                this.vectorTimer = (Math.random() * 60) + 10
                this.vector.velocity = Math.random() * 6
                this.vector.x = (Math.random() * 2) - 1
                this.vector.y = (Math.random() * 2) - 1
            }
        }
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Enemy