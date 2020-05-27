import Box from "./containers/Box"
import { shapes } from "../../utils/RenderUtils"
import Button from './Button'
import Label from './Label'

class Panel extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = [], labelText, visible = true){
        super(x, y, width, height, color, rotation, children, visible)
        this.button = new Button(this.position.x + 5, this.position.y + 5, 10, 10, 'white', 0, "X", this.closeMenu, false)
        const label = new Label(this.position.x + 50, this.position.y + 10, 100, 100, 0, 'white', labelText, 'sans-serif', 12, 'center')
        this.children.push(label, this.button)
    }

    init(addEntity){
        //  TODO Adds double the entities
        addEntity(this.button)
    }

    show(){
        super.show()
    }

    update(){
        super.update()
    }

    hide(){
        super.hide()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Panel