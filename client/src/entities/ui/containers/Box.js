import Entity from "../../Entity"

class Box extends Entity{
    constructor(x, y, width, height, data = null){

        if(data){
            super(data)
            this.data = data
        }else{
            super({})
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    render(ctx){
        super.render(ctx)
    }
}

export default Box