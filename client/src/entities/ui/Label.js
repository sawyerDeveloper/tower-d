import Entity from '../Entity'

class Label extends Entity{

    constructor(data){
        super(data)
        this.text = this.data.state.labelText
    }

    update(){
        this.data.text = this.text
    }

}

export default Label