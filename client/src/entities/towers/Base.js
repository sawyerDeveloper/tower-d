import RenderUtils, { shapes } from '../../utils/RenderUtils'
import Entity from '../Entity'
import Label from '../ui/Label'


class Base extends Entity {

    constructor(data) {
        super(data)

        this.label = new Label({
            body: { shape: shapes.TEXT, width: 150, height: 100 },
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