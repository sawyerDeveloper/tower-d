import UI from '../ui/UI'
import { shapes } from '../../utils/RenderUtils'
import Entity from '../Entity'

class Label extends Entity{

    constructor(data){
        super(data)

        this.text = 'test'//this.data.text
    }

    update(){
        this.data.state.labelText = this.text
    }

}

export default Label