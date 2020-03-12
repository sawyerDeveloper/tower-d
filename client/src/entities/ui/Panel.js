import Box from "./containers/Box"
import { shapes } from "../../utils/RenderUtils"
import Label from './Label'

class Panel extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = [], labelText){
        super(x, y, width, height, color, rotation, children)
        const label = new Label(this.position.x + 50, this.position.y + 10, 100, 100, 0, 'white', labelText, 'sans-serif', 12, 'center')
        this.children.push(label)
        console.log(children)
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Panel