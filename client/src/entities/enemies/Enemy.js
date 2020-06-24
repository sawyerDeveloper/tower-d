import Entity from '../Entity'
import Label from '../ui/Label'
import ProximityValueComponent from '../../components/vector/ProximityValueComponent'
import VectorAngleComponent from '../../components/vector/VectorAngleComponent'
import VectorDirectionComponent from '../../components/vector/VectorDirectionComponent'
class Enemy extends Entity {
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

        this.label = new Label(this.position.x + 10, this.position.y + 15, 30, 30, 0, 'white', this.state.health, null, 18)
        this.children.push(this.label)
        if (this.path === 'random') {
            this.vectorTimer = (Math.random() * 60) + 10
        } else {
            this.pathFinder = { xGood: false, yGood: false, iterator: 0 }
        }
    }

    init(addEntity) {
        addEntity(this.label)
        this.label.init(addEntity)
    }

    center() {
        return super.center()
    }

    update(stage) {

        if (this.state.health > 0 && this.state.visible) {

            this.position.y += this.vector.y
            this.position.x += this.vector.x
            if(this.path == 'random'){

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
            }

            this.label.position.x = this.position.x + 10
            this.label.position.y = this.position.y + 15
            this.label.text = this.state.health

            this.updatePath()
        } else {
            this.hide()
        }

    }

    damage(data) {
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
    hitTest(x, y) {
        return super.hitTest(x, y)
    }

    /** 
     * Dynamically change the vectors based on the path configuration 
     */
    updatePath() {
        if (this.path === 'random') {
            this.vectorTimer--
            if (this.vectorTimer <= 1) {
                this.vectorTimer = (Math.random() * 60) + 10
                this.vector.velocity = Math.random() * 3
                this.vector.x = ((Math.random() * 2) - 1) * this.vector.velocity
                this.vector.y = ((Math.random() * 2) - 1) * this.vector.velocity
            }
        } else {
            if (Math.floor(this.position.x) == this.path[this.pathFinder.iterator].x) {
                this.pathFinder.xGood = true
            } else {
                this.pathFinder.xGood = false
            }
            if (Math.floor(this.position.y) == this.path[this.pathFinder.iterator].y) {
                this.pathFinder.yGood = true
            } else {
                this.pathFinder.yGood = false
            }

            //  X and Y are met - move on to the next point in the array
            if (this.pathFinder.xGood && this.pathFinder.yGood) {
                this.pathFinder.iterator++
            }

            if(this.path.length == this.pathFinder.iterator){
                this.hide()
            }else{
                this.position.rotation = VectorAngleComponent(this.position, this.path[this.pathFinder.iterator], this.position.rotation)
                VectorDirectionComponent(this.position, this.vector)
            }
        }
    }

}

export default Enemy