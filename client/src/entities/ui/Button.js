import Label from './Label'
import Entity from '../Entity'
import { shapes } from '../../utils/RenderUtils'

class Button extends Entity{
    constructor(data, callback){
        super(data)
        this.callback = callback
        this.label = new Label({
            body: { shape: shapes.TEXT, width: this.body.width, height: this.body.height },
            style: { type: 'shape', color: 'white', font: 'sans-serif', size: 12, textAlign: 'center' },
            state: { visible: true, labelText : data.state.labelText },
            position: { x: this.position.x, y: this.position.y, rotation: 0 }
        })
        this.children.push(this.label)
    }

    init(addEntity){
        addEntity(this.label)
    }

    update(){
        super.update()
        this.label.position.x = this.position.x + 17
        this.label.position.y = this.position.y + 12
    }

    show(){
        super.show()
        this.state.hittable = true
    }

    hide(){
        super.hide()
        super.unHit()
        this.state.hittable = false
    }

    hit(){
        super.hit()
        this.callback()
    }

    unHit(){
        super.unHit()
    }
}

export default Button