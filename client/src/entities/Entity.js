import RenderUtils from '../utils/RenderUtils'
import Vector from '../utils/Vector'

class Entity{
    constructor(data){
        this.data = data
        if(this.data.style.type === 'image'){
            this.loaded = false
            this.img = RenderUtils.loadImage(this.data.style.src)
        }
        this.centerVector = new Vector(0,0)
        console.log(this)
        this.children = []
    }

    render(ctx) {

        switch(this.style.type){
            case 'image' :
                if(this.img){
                    RenderUtils.drawImage(ctx, this.img, this.position, this.body)
                }
            break
            default:
                RenderUtils.drawShape(ctx, this.style, this.position, this.body)
        }
        console.log(this.children)
        if(this.children.length > 0){

            this.children.forEach(entity => {
                entity.render(ctx)
            });
        }

        
    }

    center(){
        this.centerVector.x = this.position.x + (this.body.width / 2)
        this.centerVector.y = this.position.y + (this.body.height / 2)
        return this.centerVector
    }

    hitTest(x, y){
        return  this.state.hit === false && 
                this.position.x < x && 
                this.position.y < y && 
                this.position.x + this.body.width > x && 
                this.position.y + this.body.height < y
    }
}

export default Entity