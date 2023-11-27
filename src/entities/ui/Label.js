import UI from '../ui/UI'
import { shapes } from '../../utils/RenderUtils'

class Label extends UI{

    constructor(x, y, width, height, rotation, color, text, font, size, textAlign, children){
        super(x, y, width, height, shapes.TEXT, color, rotation, children)
        this.data.text = text
        this.data.color = color
        this.data.font = font
        this.data.size = size
        this.data.textAlign = textAlign
        this.style.type = shapes.TEXT
        this.text = this.data.text
    }

    update(){
        this.data.text = this.text
    }

}

export default Label