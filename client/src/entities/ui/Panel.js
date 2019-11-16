import Box from "./containers/Box"
import { shapes } from "../../utils/RenderUtils"

class Panel extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = []){
        super(x, y, width, height, color, rotation, children = children)
        this.children.push()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Panel