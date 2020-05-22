import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Panel from '../ui/Panel'
import Button from '../ui/Button'

class Tower extends Entity{

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
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
        super.hit()
        this.openMenu()
    }

    closeMenu = () => {
        this.state.open = false
        console.log('close menu')
    }

    openMenu = () => {
        const button = new Button(this.position.x, this.position.y, 100, 100, 'white', 0, "X")
        const panel = new Panel(this.position.x, this.position.y, 100, 100, 'white', 0, [button], "test")
        this.children.push(panel)
        this.state.open = true
    }

    /**
     * @returns {boolean} If the point is over this object, return true, otherwise false
     */
    hitTest(x, y){
        //console.log(x, y, this.position.x)
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