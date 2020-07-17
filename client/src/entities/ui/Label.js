import Entity from '../Entity'

class Label extends Entity{

    constructor(data){
        super(data)
    }

    update(){
        this.data.state.labelText = this.text
    }


}

export default Label