class Tower{

    constructor(data, stage) {
        /** {shape: 'rectangle', width: 100, height: 40} */
        this.body = data.body
        /** {color: 'brown'} */
        this.style = data.style
        /** {hit: false, open: true} */
        this.state = data.state
        /** {x: 0, y: 20, rotation: 180}  */
        this.position = data.position
    }

    update = () => {
        this.position.rotation = 0
        //console.log(this.position)

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
        console.log(this)
        //Override
    }

    upgrade = () => {
        //Override
        this.closeMenu()
    }

    sell = () => {
        //Override
    }

    hit = () => {
        this.state.hit = true
        this.openMenu()
    }

    closeMenu = () => {
        this.state.hit = false
        console.log('close menu')
    }

    openMenu = () => {
        console.log('open menu')
    }

    /**
     * @returns {boolean} If the point is over this object, return true, otherwise false
     */
    hitTest = (x, y) => {
        return  this.state.hit === false && 
                this.position.x < x && 
                this.position.y < y && 
                this.position.x + this.body.width > x && 
                this.position.y + this.body.height < y
    }

    render = (ctx) => {
        ctx.beginPath();
        ctx.strokeStyle = this.style.color
        ctx.lineWidth = this.style.lineWidth
        ctx.arc(this.position.x, this.position.y, this.body.radius, 0, Math.PI * 2, true)
        ctx.stroke()
    }

}

export default Tower