import Entity from "../Entity"

class UI extends Entity {
    constructor(x, y, width, height, shape, color, rotation, children){
        super({
            body: {shape: shape, width: width, height: height},
            style: {color: color, type: 'shape'},
            position: {x: x, y: y, rotation: rotation},
            children: children
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