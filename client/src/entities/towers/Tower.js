import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Box from '../ui/containers/Box'
import Panel from '../ui/Panel'

class Tower extends Entity{

    constructor(data) {
        super(data)
        

        /** Yes, load in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.style.src)

    }

    update(){
        this.position.rotation = Math.atan2(this.currentTarget.entity.position.y - super.center().y, this.currentTarget.entity.position.x - super.center().x )
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

    hit(){
        console.log('hit',this)
        this.state.hit = true
        this.openMenu()
    }

    closeMenu = () => {
        this.state.hit = false
        console.log('close menu')
    }

    openMenu = () => {
        const panel = new Panel(this.position.x, this.position.y, 100, 100, 'white', 0, [], "test")

        this.children.push(panel)
        console.log('open menu', this.children)
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