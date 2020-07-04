class CountdownSystem {
    constructor() {
        this.callback = null
        this.toValue = 0
        this.currentValue = 0
    }

    init(callback, toValue){
        this.callback = callback
        this.toValue = toValue
        this.currentValue = 0
    }

    tick(){
        this.currentValue++
    }

    update(){
        if(this.currentValue >= this.toValue){
            this.callback()
            this.currentValue = 0
        }
    }
}
export default CountdownSystem