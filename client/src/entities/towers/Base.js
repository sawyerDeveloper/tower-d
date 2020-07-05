import RenderUtils, { shapes } from '../../utils/RenderUtils'
import Entity from '../Entity'
import Label from '../ui/Label'


class Base extends Entity {

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.style.src)
        this.label = new Label({
            body: { shape: shapes.TEXT, width: 30, height: 30 },
            style: { type: shapes.TEXT, color: 'red', size: 18, font: 'sans-serif', textAlign: 'center' },
            state: { hit: false, visible: true, hittable: false, labelText: this.state.health },
            position: { x: this.position.x - 20, y: this.position.y - 15, rotation: 0 },
            children: []
        })
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