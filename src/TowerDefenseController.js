import Model from './TowerDefenseModel'

class TowerDController{
    constructor(view){
        this.view = view
        this.model = new Model()
    }

    init = () => {
        console.log('init')
        requestAnimationFrame(this.update)
    }

    update = () => {

        this.view.update(this.model.data)
        requestAnimationFrame(this.update)
    }

    play = () => {
        console.log('play')
    }
}

export default TowerDController