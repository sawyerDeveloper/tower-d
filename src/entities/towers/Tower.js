import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'

class Tower{

    constructor(data) {
        //super(data)
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
    }

    update = () => {
        //console.log(this.position.y-this.body.height/2)
        
        
        var center = [this.position.x+this.body.width/2, this.position.y+this.body.height/2]
        
        var angle = Math.atan2(this.currentTarget.entity.position.x - center[0], - (this.currentTarget.entity.position.y - center[1]) )*(180/Math.PI);      
        
        this.position.rotation = angle
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
        return  this.state.hit === false && 
                this.position.x < x && 
                this.position.y < y && 
                this.position.x + this.body.width > x && 
                this.position.y + this.body.height < y
    }

    /**
     * Renders the visual representation on each frame
     * @param {*} ctx Canvas context of the view
     */
    render(ctx){
        if(this.img){
            RenderUtils.drawImage(ctx, this.img, this.position, this.body)
        }
    }

}

export default Tower