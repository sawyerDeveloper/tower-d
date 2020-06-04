import UI from "./UI"
import { shapes } from '../../utils/RenderUtils'

class Label extends UI{

    constructor(x, y, width, height, rotation, color, text, font, size, textAlign, children){
        super(x, y, width, height, shapes.TEXT, color, rotation, children)
        this.data.text = text
        this.data.color = color
        this.data.font = font
        this.data.size = size
        this.data.textAlign = textAlign

        this.text = this.data.text
    }

    update(){
        this.data.text = this.text
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Label