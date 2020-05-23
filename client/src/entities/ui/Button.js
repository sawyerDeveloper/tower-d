import Box from '../ui/containers/Box'
import { shapes } from "../../utils/RenderUtils"
import Label from './Label'

class Button extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, labelText){
        super(x, y, width, height, color, rotation)
        const label = new Label(x + 5, y + 10, width, height, 0, 'white', labelText, 'sans-serif', 12, 'center')
        this.children.push(label)
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Button