import Model from './TowerDefenseModel'
import states from './TowerDefense'
import Enemy from './entities/enemies/Enemy'

import { level1 } from './constants/levels/level1' 
import Tower from './entities/towers/Tower'

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

        this.model.data.towers.push(
            {
                body: { shape: 'circle', radius: 25 },
                style: { color: 'white', lineWidth: 1 },
                state: { hit: false },
                position: { x: 300, y: 350, rotation: 0 }
            }
        )

        this.model.towers = this.model.data.towers.map(towerData => {
            return new Tower(towerData)
        })

        this.model.entities = this.model.enemies.concat(this.model.towers)
        this.model.dataEntities = this.model.data.enemies.concat(this.model.data.towers)

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
            this.view.update(this.model.dataEntities)
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
            this.model.towers.forEach(tower => {
                if ( tower.hitTest(userX, userY)) 
                {
                    tower.hit()
                    console.log('hit', tower.position.x < userX ,  tower.position.x + tower.body.width > userX, tower.position.y < userY, tower.position.y + tower.body.height < userY)
                    console.log('hit', userX, userY, tower.position.x, tower.position.y)
                }
            })
        }
    }

    updateVectors = () => {

        this.model.entities.forEach(entity => {
            entity.update()
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