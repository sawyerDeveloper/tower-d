import Model from './TowerDefenseModel'
import states from './TowerDefenseView'
import Enemy from './entities/enemies/Enemy'

import { level1 } from './constants/levels/level1' 
import Tower from './entities/towers/Tower'


/**
 * Acts as the Controller in an MVC for the game wrapper.
 * This controls the game loop and coordinating between the view and model.
 */
class TowerDefenseController {

    /**
     * Takes view as a param and sets up the data model.
     * @param {*} view TowerDefense in this case
     */
    constructor(view) {
        this.view = view
        this.model = new Model()
    }

    /**
     * Initializes the game by telling the model to get data and 
     * prepare for more data in memory.
     */
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

        //  Temp for one tower.
        this.model.data.towers.push(
            {
                body: { shape: 'circle', width: 25, height:25 },
                style: { type: 'image', src: 'bb.png'},
                state: { hit: false },
                position: { x: 300, y: 350, rotation: 0 },
                currentTarget: {entity: this.model.enemies[0]}
            }
        )

        // Get tower data into memory
        this.model.towers = this.model.data.towers.map(towerData => {
            return new Tower(towerData)
        })

        //  Combine both lists of entities into 1 for allowing a better loop :)
        this.model.entities = this.model.enemies.concat(this.model.towers)

        //temp for testing
        this.model.loop = true

        //  Start the loop by asking for this.update to be called every frame.
        requestAnimationFrame(this.update)
    }

    /**
     * This is the pulse of the game. 
     */
    update = () => {

        if (this.model.loop) {

            //  Move Stuff
            this.updateVectors()

            //  See if stuff got hit, including a human finger against a tower
            this.checkCollisions()

            //  Render the results
            this.view.renderUpdate(this.model.entities)
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
                    console.log('hit', userX, userY, tower.position.x, tower.position.y)
                }
            })
        }
    }
    
    updateVectors = () => {
        this.model.entities.forEach(entity => {
            entity.update(this.model.stage)
        })
    }
    
    setStage = (width, height) => {
        this.model.stage = {width: width, height: height}
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

export default TowerDefenseController