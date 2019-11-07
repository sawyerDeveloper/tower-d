import Entity from "../Entity"

class UI extends Entity {
    constructor(x, y, width, height, shape, color, rotation){
        super({
            body: {shape: shape, width: width, height: height},
            style: {color: color},
            position: {x: x, y: y, rotation: rotation}
        })
    }

    hitTest(x, y){
        return super.hitTest(x, y)
    }

    render(ctx){
        super.render(ctx)
    }
}
export default UI