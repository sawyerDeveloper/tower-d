import Entity from "../Entity"

class UI extends Entity {
    constructor(x, y, width, height, shape, color, rotation, children = [], visible = true){
        super({
            body: {shape: shape, width: width, height: height},
            style: {color: color, type: 'shape'},
            position: {x: x, y: y, rotation: rotation},
            children: children,
            state: {visible: visible},
            ui: true
        })
    }

    hit(){
        super.hit()
    }

    unHit(){
        super.unHit()
    }

    show(){
        super.show()
    }

    hide(){
        super.hide()
    }

    update(){
        super.update()
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}
export default UI