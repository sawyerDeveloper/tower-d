import RenderUtils from '../utils/RenderUtils'
import Vector from '../types/Vector'
import VectorCenterComponent from '../components/vector/VectorCenterComponent'
import BodyHitTestComponent from '../components/body/BodyHitTestComponent'

/**
 * Super class for every object on the screen.
 */
class Entity {
    constructor(data) {
        this.data = data

        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown', type: 'image', src: 'bb.jpeg'} */
        this.style = data.style
        /** {hit: false, open: true, visible: true} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position
        /** Boolean */
        this.ui = data.ui
        /** Array of Entities */
        this.children = data.children

        /** 'random' or [[1,0],[1,1],[2,1]] */
        this.path = data.path

        /** An entity most likely */
        this.currentTarget = data.currentTarget
        if (this.data.style.type === 'image') {

            this.img = RenderUtils.loadImage(this.data.style.src)
        }

        //  Inititalize all objects here
        this.centerVector = new Vector(0, 0)
    }

    /**
     * Placeholder/Override
     */
    init() {
        
    }

    /**
     * Placeholder/Override
     */
    update() {

    }

    render(ctx) {
        if (this.state.visible) {
            switch (this.style.type) {
                case 'image':
                    if (this.img) {
                        RenderUtils.drawImage(ctx, this.img, this.position, this.body)
                    } else {
                        console.error('No Image loaded.')
                    }
                    break
                default:
                    RenderUtils.drawShape(ctx, this.data)
            }

            //  TODO Move to system
            if (this.data.children.length > 0) {
                this.data.children.forEach(entity => {
                    entity.render(ctx)
                });
            }
        }
    }

    /**
     * This is derived so we make a method to calculate it.
     */
    center() {
        return VectorCenterComponent(this.position.x, this.position.y, this.body.width, this.body.height, this.centerVector)
    }

    hit() {
        this.state.hit = true
    }

    unHit() {
        this.state.hit = false
    }

    show() {
        this.state.visible = true
    }

    hide() {
        this.state.visible = false
        if(this.children){

            //Temp until moved to a system
            this.children.forEach((entity) => {entity.hide()})
        }
    }

    hitTest(x, y) {
        return BodyHitTestComponent(this.position.x, this.position.y, this.body.width, this.body.height, x, y)
    }
}

export default Entity