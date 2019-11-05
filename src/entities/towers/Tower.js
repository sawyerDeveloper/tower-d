import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Vector from '../../utils/Vector'
import { whileStatement } from '@babel/types'

class Tower extends Entity{

    constructor(data) {
        super(data)
        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown', type: 'image', src: 'bb.jpeg'} */
        this.style = data.style
        /** {hit: false, open: true} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position

        this.currentTarget = data.currentTarget

        this.img = RenderUtils.loadImage(this.style.src)

        this.lastRotation = 0
    }

    update = () => {
        const center = new Vector(this.position.x+this.body.width/2, this.position.y-this.body.height/2)
        const angle = Math.atan2(this.currentTarget.entity.position.y - center.y, this.currentTarget.entity.position.x - center.x )
        const newAngle = this.lastRotation - angle
        this.position.rotation = -newAngle *(180/Math.PI)
        this.lastRotation = angle
    }

    rateOfFire = () => {
        //Override
    }

    range = () => {
        //Override
    }

    attackTypes = () => {
        //Override
    }

    fire = () => {
        console.log(this, 'fire')
        //Override
    }

    upgrade = () => {
        //Override
        this.closeMenu()
    }

    sell = () => {
        //Override
        this.closeMenu()
    }

    hit = () => {
        this.state.hit = true
        this.openMenu()
    }

    closeMenu = () => {
        this.state.hit = false
        console.log('close menu')
    }

    openMenu = () => {
        console.log('open menu')
    }

    /**
     * @returns {boolean} If the point is over this object, return true, otherwise false
     */
    hitTest(x, y){
        return super.hitTest(x, y)
    }

    /**
     * Renders the visual representation on each frame
     * @param {*} ctx Canvas context of the view
     */
    render(ctx){
        super.render(ctx)
    }

}

export default Tower