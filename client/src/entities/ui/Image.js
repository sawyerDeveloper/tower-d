import RenderUtils from '../../utils/RenderUtils'
import Entity from '../Entity'

class Image extends Entity {

    constructor(data) {
        super(data)

        /** Load image in the constructor.  The engine doesn't init until the dom is loaded. */
        this.img = RenderUtils.loadImage(this.data.style.src)

    }

}

export default Image