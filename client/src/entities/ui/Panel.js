import Box from "./containers/Box"
import Button from './Button'
import Label from './Label'

class Panel extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = [], labelText, visible = true, callback){
        super(x, y, width, height, color, rotation, children, visible)
        this.callback = callback
        this.closeBtn = new Button(this.position.x + 5, this.position.y + 5, 10, 10, 'white', 0, "X", false, () => {this.hide()})
        const label = new Label(this.position.x + 50, this.position.y + 10, 100, 100, 0, 'white', labelText, 'sans-serif', 12, 'center')
        this.children.push(label, this.closeBtn)
    }

    init(addEntity){
        //  TODO Adds double the entities
        addEntity(this.closeBtn)
    }

    show(){
        super.show()
        this.closeBtn.show()
    }

    update(){
        super.update()
    }

    hide(){
        super.hide()
        this.closeBtn.hide()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Panel