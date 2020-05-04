import UI from "../UI"
import { shapes } from '../../../utils/RenderUtils'

class Box extends UI{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = []){
        super(x, y, width, height, shapes.RECTANGLE, color, rotation, children)
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Box