import Box from '../ui/containers/Box'
import Label from './Label'

class Button extends Box{
    constructor(x, y, width, height, color = 'white', rotation = 0, labelText, visible, callback){
        super(x, y, width, height, color, rotation, [], visible)
        this.callback = callback
        this.label = new Label(x + 5, y + 10, width, height, 0, 'white', labelText, 'sans-serif', 12, 'center', [], true)
        this.children.push(this.label)
        //this.state.hittable = true
        console.log(this.callback)
    }

    update(){
        super.update()
        this.label.position.x = this.position.x + 5
        this.label.position.y = this.position.y + 10

    }

    show(){
        super.show()
        this.state.hittable = true
    }

    hide(){
        super.hide()
        super.unHit()
        this.state.hittable = false
    }

    hit(){
        super.hit()
        console.log(this.callback)
        this.callback()
    }

    unHit(){
        super.unHit()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Button