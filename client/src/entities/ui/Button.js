import Box from '../ui/containers/Box'
import Label from './Label'
import { shapes } from '../../utils/RenderUtils'

class Button extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, labelText, visible, callback){
        super(x, y, width, height, color, rotation, [], visible)
        this.callback = callback
        const label = new Label({
            body: { shape: shapes.TEXT, width: width, height: height },
            style: { type: shapes.TEXT, color: 'white', size: 12, font: 'sans-serif', textAlign: 'center' },
            state: { hit: false, visible: true, hittable: false, labelText: labelText },
            position: { x: x + 5, y: y + 10, rotation: 0 },
            children: []
        })
        this.children.push(label)
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