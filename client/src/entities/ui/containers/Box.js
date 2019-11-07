import UI from "../UI"
import { shapes } from '../../../utils/RenderUtils'

class Box extends UI{
    constructor(x, y, width, height, color = 'white', rotation = 0){
        super(x, y, width, height, shapes.RECTANGLE, color, rotation)
        
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Box