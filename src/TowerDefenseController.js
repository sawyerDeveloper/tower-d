import Model from './TowerDefenseModel'
import states from './TowerDefense'

class TowerDController{

    constructor(view){
        this.view = view
        this.model = new Model()
    }

    init = () => {
        console.log('init')
        this.model.loop = true
        requestAnimationFrame(this.update)
    }

    update = () => {

        if(this.model.loop){

            //  Move Stuff
            this.updateVectors()

            //  See if stuff got hit, including a human finger against a tower
            this.checkCollisions()

            //  Render the results
            this.view.update(this.model.data)
        }
        requestAnimationFrame(this.update)
    }

    updateUserInput = (data) => {
        this.model.userInput(data)
    }

    checkCollisions = () => {
        //  Stub
    }

    updateVectors = () => {
        //  Stub
    }

    stop = () => {
        console.log('stop')
        this.model.loop = false
    }

    play = () => {
        console.log('play')
        this.model.loop = true
        this.view.updateCurrentState(states.PLAY)
    }

    pause = () => {
        console.log('pause')
        this.model.loop = false
        this.view.updateCurrentState(states.PAUSE)
    }
}

export default TowerDController