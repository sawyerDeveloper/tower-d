import Box from '../ui/containers/Box'
import { shapes } from "../../utils/RenderUtils"
import Label from './Label'

class Button extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, labelText, visible, callback){
        super(x, y, width, height, color, rotation, [], visible)
        this.callback = callback
        const label = new Label(x + 5, y + 10, width, height, 0, 'white', labelText, 'sans-serif', 12, 'center')
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