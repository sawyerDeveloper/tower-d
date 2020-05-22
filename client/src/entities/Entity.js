import RenderUtils from '../utils/RenderUtils'
import Vector from '../utils/Vector'

class Entity{
    constructor(data){
        this.data = data

        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown', type: 'image', src: 'bb.jpeg'} */
        this.style = data.style
        /** {hit: false, open: true} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position

        /** Array of Entities */
        this.children = data.children

         /** 'random' or [[1,0],[1,1],[2,1]] */
         this.path = data.path

        /** An entity most likely */
        this.currentTarget = data.currentTarget
        if(this.data.style.type === 'image'){
            this.loaded = false
            this.img = RenderUtils.loadImage(this.data.style.src)
        }
        this.centerVector = new Vector(0,0)
    }

    render(ctx) {

        switch(this.style.type){
            case 'image' :
                if(this.img){
                    RenderUtils.drawImage(ctx, this.img, this.position, this.body)
                }
            break
            default:
                RenderUtils.drawShape(ctx, this.data)
        }
        if(this.data.children.length > 0){
            this.data.children.forEach(entity => {
                entity.render(ctx)
            });
        }
    }

    center(){
        this.centerVector.x = this.position.x + (this.body.width / 2)
        this.centerVector.y = this.position.y + (this.body.height / 2)
        return this.centerVector
    }

    hit(){
        //this.state.hit = true
    }

    hitTest(x, y){
        if( x > this.position.x - (this.body.width / 2) &&
            x < this.position.x + this.body.width &&
            y > this.position.y && 
            y < this.position.y + this.body.height){
                return true
        }
        return false 
    }
}

export default Entity