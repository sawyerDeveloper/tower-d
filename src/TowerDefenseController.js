import Model from './TowerDefenseModel'
import states from './TowerDefense'
import Enemy from './entities/enemies/Enemy'

import { level1 } from './constants/levels/level1' 

class TowerDController {

    constructor(view) {
        this.view = view
        this.model = new Model()
    }

    init = () => {
        
        console.log('init', level1)

        // Get level data into memory
        this.model.data.enemies = level1.waves[0].map(enemyData => {
            return enemyData
        })

        // Convert that data into classes and store that list outside of the data object in the model
        this.model.enemies = this.model.data.enemies.map(enemyData => {
            return new Enemy(enemyData)
        })

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
            this.model.enemies.forEach(enemy => {

                if ( enemy.hitTest(userX, userY)    ) 
                {
                    enemy.hit()
                    console.log('hit', enemy.position.x < userX ,  enemy.position.x + enemy.body.width > userX, enemy.position.y < userY, enemy.position.y + enemy.body.height < userY)
                    console.log('hit', userX, userY, enemy.position.x, enemy.position.y)
                }
            })
        }
    }

    updateVectors = () => {

        this.model.enemies.forEach(enemy => {
            enemy.update()
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