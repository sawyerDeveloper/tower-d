import { shapes } from '../../utils/RenderUtils'
import Label from './Label'
import Entity from '../Entity'

class Button extends Entity{
    constructor(data, callback){
        super(data)
        this.callback = callback
        this.label = new Label({
            body: { shape: shapes.TEXT, width: this.body.width, height: this.body.height },
            style: { type: shapes.TEXT, color: 'white', size: 12, font: 'sans-serif', textAlign: 'center' },
            state: { hit: false, visible: true, hittable: false, labelText: this.state.labelText },
            position: { x: this.position.x + 5, y: this.position.y + 10, rotation: 0 },
            children: []
        })
        this.children.push(this.label)
    }

    update(){
        super.update()
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

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Button