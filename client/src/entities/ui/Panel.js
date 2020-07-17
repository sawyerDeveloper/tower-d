import Entity from '../Entity'
import Button from './Button'
import Label from './Label'
import { shapes } from '../../utils/RenderUtils'

class Panel extends Entity{
    constructor(data, callback){
        super(data)
        this.callback = callback
        this.button = new Button({
            body: { shape: shapes.RECTANGLE, width: 10, height: 10 },
            style: { type: shapes.RECTANGLE, color: 'white' },
            state: { hit: false, visible: this.state.visible, hittable: false, labelText: "X" },
            position: { x: this.position.x + 5, y: this.position.y + 5, rotation: 0 },
            children: []
        }, () => {this.hide()})
        this.label = new Label({
            body: { shape: shapes.TEXT, width: 100, height: 100 },
            style: { type: shapes.TEXT, color: 'white', size: 12, font: 'sans-serif', textAlign: 'center' },
            state: { hit: false, visible: this.state.visible, hittable: false, labelText: this.state.labelText },
            position: { x: this.position.x + 50, y: this.position.y + 10, rotation: 0 },
            children: []
        })
        this.children.push(this.label, this.button)
    }

    update(){
        super.update()
        this.label.text = this.state.labelText
    }

    init(addEntity){
        addEntity(this.button)
        addEntity(this.label)
    }

    show(){
        super.show()
        this.button.show()
        this.label.show()
    }

    hide(){
        super.hide()
        this.button.hide()
        this.label.hide()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

}

export default Panel