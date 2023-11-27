import Entity from "../Entity"
import RenderUtils from '../../utils/RenderUtils'

const TIME = 10

class Laser extends Entity {
    constructor(data) {
        super(data)
    }

    update() {
        if (this.state.visible) {
            this.data.state.time -= 1
            if (this.data.state.time <= 0) {
                this.hide()
            }
        }
    }

    show() {
        super.show()
        this.data.state.time = TIME
    }

    hide() {
        super.hide()
    }

    render(ctx) {
        if(this.state.visible){
            RenderUtils.drawShape(ctx, this.data)
        }
    }
}

export default Laser