import Button from './Button'
import Label from './Label'
import { shapes } from '../../utils/RenderUtils'
import Entity from '../Entity'

class Panel extends Entity{
    constructor(data, callback){
        super(data)
        this.callback = callback
        this.closeBtn = new Button({
            body: { shape: shapes.RECTANGLE, width: this.body.width, height: this.body.height },
            style: { type: 'shape', color: 'white'},
            state: { visible: false, labelText : 'X'},
            position: { x: this.position.x + 5, y: this.position.y + 5, rotation: 0 },
            children: []
        }, () => {this.hide()})
        this.label = new Label({
            body: { shape: shapes.TEXT, width: 100, height: 100 },
            style: { type: 'shape', color: 'white', font: 'sans-serif', size: 12, textAlign: 'center' },
            state: { visible: false, labelText : data.state.labelText },
            position: { x: this.position.x + 50, y: this.position.y + 25, rotation: 0 },
            children: []
        })
        this.towerBtn = new Button({
            body: { shape: shapes.RECTANGLE, width: 100, height: 20 },
            style: { type: 'shape', color: 'white'},
            state: { visible: false, labelText : 'Tower'},
            position: { x: this.position.x, y: this.position.y + 25, rotation: 0 },
            children: []
        }, callback)

        this.children.push(this.label, this.closeBtn, this.towerBtn)
    }

    init(addEntity){
        //  TODO Adds double the entities
        addEntity(this.label)
        addEntity(this.closeBtn)
        addEntity(this.towerBtn)
        //this.closeBtn.init(addEntity)
    }

    show(){
        super.show()
        this.closeBtn.show()
        this.label.show()
        this.towerBtn.show()
    }

    update(){
        super.update()
        this.label.position.x = this.position.x + 50
        this.label.position.y = this.position.y + 12
        this.closeBtn.position.x = this.position.x + 5
        this.closeBtn.position.y = this.position.y + 5
        this.towerBtn.position.x = this.position.x
        this.towerBtn.position.y = this.position.y + 25
    }

    hide(){
        super.hide()
        this.closeBtn.hide()
        this.label.hide()
        this.towerBtn.hide()
    }

}

export default Panel