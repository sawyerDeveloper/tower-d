import Box from "./containers/Box"
import Button from './Button'
import Label from './Label'

class Panel extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, children = [], labelText, visible = true, callback){
        super(x, y, width, height, color, rotation, children, visible)
        this.callback = callback
        this.closeBtn = new Button(this.position.x + 5, this.position.y + 5, 10, 10, 'white', 0, "X", false, () => {this.hide()})
        this.label = new Label(this.position.x + 50, this.position.y + 12, 100, 100, 0, 'white', labelText, 'sans-serif', 12, 'center', [], false)
        this.children.push(this.label, this.closeBtn)
    }

    init(addEntity){
        //  TODO Adds double the entities
        addEntity(this.label)
        addEntity(this.closeBtn)
        //this.closeBtn.init(addEntity)
    }

    show(){
        super.show()
        this.closeBtn.show()
        this.label.show()
    }

    update(){
        super.update()
        this.label.position.x = this.position.x + 50
        this.label.position.y = this.position.y + 12
        this.closeBtn.position.x = this.position.x + 5
        this.closeBtn.position.y = this.position.y + 5
    }

    hide(){
        super.hide()
        this.closeBtn.hide()
        this.label.hide()
    }

}

export default Panel