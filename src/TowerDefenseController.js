import Model from './TowerDefenseModel'
import states from './TowerDefense'

class TowerDController {

    constructor(view) {
        this.view = view
        this.model = new Model()
    }

    init = () => {
        console.log('init')

        //temp for testing
        this.model.loop = true
        requestAnimationFrame(this.update)
    }

    update = () => {

        if (this.model.loop) {

            //  Move Stuff
            this.updateVectors()

            //  See if stuff got hit, including a human finger against a tower
            this.checkCollisions()

            //  Render the results
            this.view.update(this.model.data)
        }

        requestAnimationFrame(this.update)
    }

    applyUserInput = (event) => {
        this.model.userInput = { x: event.pageX, y: event.pageY }
    }

    removeUserInput = () => {
        this.model.userInput = null
    }

    checkCollisions = () => {
        
        if(this.model.userInput){
            const userX = this.model.userInput.x
            const userY = this.model.userInput.y
            this.model.data.enemies.forEach(enemy => {

                if (    enemy.state.hit === false && 
                        enemy.position.x < userX && 
                        enemy.position.y < userY && 
                        enemy.position.x + enemy.body.width > userX && 
                        enemy.position.y + enemy.body.height < userY    ) 
                {
                            enemy.style.color = 'white'
                            enemy.state.hit = true
                            enemy.vector.velocity = 0
                            console.log('hit', enemy.position.x < userX ,  enemy.position.x + enemy.body.width > userX, enemy.position.y < userY, enemy.position.y + enemy.body.height < userY)
                            console.log('hit', userX, userY, enemy.position.x, enemy.position.y)
                }
            })
        }
    }

    updateVectors = () => {
        this.model.data.enemies.forEach(enemy => {
            enemy.position.y += (enemy.vector.y * enemy.vector.velocity)
            if (enemy.position.y > 600) {
                enemy.position.y = -40
            }
        })
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