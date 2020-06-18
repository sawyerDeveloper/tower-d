import Entity from '../Entity'
import Label from '../ui/Label'
import ProximityValueComponent from '../../components/vector/ProximityValueComponent'

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

        this.label = new Label(this.position.x , this.position.y + 15, 30, 30, 0, 'white', this.state.health, null, 18)
        this.children.push(this.label)
        if(this.path === 'random'){
            this.vectorTimer = (Math.random() * 60) + 10
        }
    }

    init(addEntity){
        addEntity(this.label)
        this.label.init(addEntity)
    }

    center() {
        return super.center()
    }

    update(stage){

        if(this.state.health > 0){
            
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
            
            this.label.position.x = this.position.x
            this.label.position.y = this.position.y + 15
            this.label.text = this.state.health
            
            this.updatePath()
        }else{
            this.hide()
        }
        
    }

    damage(data){
        this.state.health -= 1
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
                this.vector.velocity = Math.random() * 3
                this.vector.x = (Math.random() * 2) - 1
                this.vector.y = (Math.random() * 2) - 1
            }
        }else {
            //console.log(this.position.x, this.position.y)
            console.log(ProximityValueComponent(this.position, this.path[0]))
            //console.log(this.path[0])
        }
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Enemy