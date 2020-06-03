import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Panel from '../ui/Panel'

const FIRE_TIMER = 60

class Tower extends Entity{

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.style.src)

        this.panel = new Panel(this.position.x, this.position.y, 100, 100, 'white', 0, [], "test", false, this.menuInput)
        this.children.push(this.panel)

        this.fireTimer = FIRE_TIMER

    }

    init(addEntity){
        addEntity(this.panel)
        this.panel.init(addEntity)
        this.state.hittable = true
    }

    update(){
        this.position.rotation = Math.atan2(this.currentTarget.entity.position.y - super.center().y, this.currentTarget.entity.position.x - super.center().x )
        this.fireTimer--
        if(this.fireTimer <= 1){
            this.fireTimer = FIRE_TIMER
            this.fire()
        }
    }

    menuInput(input){

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
        //Temp until moved to a system
        this.currentTarget.entity.state.health--
    }

    upgrade = () => {
        this.closeMenu()
    }

    sell = () => {
        this.closeMenu()
    }

    hit(){
        super.hit()
        this.openMenu()
    }

    closeMenu = () => {
        super.unHit()
        this.panel.hide()
        this.state.open = false
        this.state.hittable = true
    }

    openMenu = () => {
        this.panel.show()
        this.state.open = true
        this.state.hittable = false
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