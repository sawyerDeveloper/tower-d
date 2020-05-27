import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'
import Panel from '../ui/Panel'

class Tower extends Entity{

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.style.src)

        this.panel = new Panel(this.position.x, this.position.y, 100, 100, 'white', 0, [], "test", false, this.menuInput)
        this.children.push(this.panel)

    }

    init(addEntity){
        addEntity(this.panel)
        this.panel.init(addEntity)
    }

    update(){
        this.position.rotation = Math.atan2(this.currentTarget.entity.position.y - super.center().y, this.currentTarget.entity.position.x - super.center().x )
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
        super.unHit()
        this.panel.hide()
        this.state.open = false
    }

    openMenu = () => {
        this.panel.show()
        this.state.open = true
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