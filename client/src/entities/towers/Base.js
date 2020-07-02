import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Label from '../ui/Label'


class Base extends Entity {

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.style.src)

        this.label = new Label(this.position.x - 30, this.position.y - 15, 30, 30, 0, 'red', this.state.health, null, 18)
        this.children.push(this.label)



    }

    init(addEntity) {
        addEntity(this.label)
    }

    update() {
        this.label.text = this.state.health
    }



    hit() {
        super.hit()
        
    }

}

export default Base