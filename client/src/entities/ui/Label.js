import UI from "./UI"
import { shapes } from '../../utils/RenderUtils'

class Label extends UI{

    constructor(x, y, width, height, rotation, color, text, font, size, textAlign, children){
        super(x, y, width, height, shapes.TEXT, color, rotation, children)
        //console.log(text)
        this.data.text = text
        this.data.color = color
        this.data.font = font
        this.data.size = size
        this.data.textAlign = textAlign
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Label