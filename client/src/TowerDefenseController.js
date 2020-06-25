import Model from './TowerDefenseModel'
import Enemy from './entities/enemies/Enemy'

import { level1 } from './constants/levels/level1'
import Tower from './entities/towers/Tower'

import ProximitySystem from '../src/systems/ProximitySystem'

/**
 * Acts as the Controller in an MVC for the game wrapper.
 * This controls the game loop and coordinating between the view and model.
 */
class TowerDefenseController {

    /**
     * Takes view as a param and sets up the data model.
     * @param {*} view TowerDefenseView in this case
     */
    constructor(view) {
        this.view = view
        this.model = new Model()

        //Temp until to move to GameEngine class
        this.proximitySystem = new ProximitySystem()
    }

    /**
     * Initializes the game by telling the model to get data and 
     * prepare for more data in memory.
     */
    init = () => {

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
                body: { shape: 'circle', width: 30, height: 30 },
                style: { type: 'image', src: 'bb.png' },
                state: { hit: false, visible: true, hittable: false },
                position: { x: 300, y: 350, rotation: 0 },
                currentTarget: { entity: null },
                children: [],
                ui: true
            }
        )

        // Get tower data into memory
        this.model.towers = this.model.data.towers.map(towerData => {
            return new Tower(towerData)
        })

        //  Combine both lists of entities into 1 for allowing a better loop :)
        this.model.entities = this.model.enemies.concat(this.model.towers)

        //  Go through entities and pull out any children and add them to the list.  
        //  TODO deal with this being fully recursive
        this.model.entities.forEach((entity) => {
            if (entity.children.length > 0) {
                entity.init((entity) => {
                    this.model.entities.push(entity)
                })
            }
        })

        this.proximitySystem.init(this.model.enemies)

        this.proximitySystem.addSourceEntity(this.model.towers[0])

        //temp for testing
        this.model.loop = true

        //  Start the loop by asking for this.update to be called every frame.
        requestAnimationFrame(this.update)
    }

    /**
     * This is the pulse of the game. 
     * The main loop runs here and runs through every entity calling update, render etc.
     */
    update = () => {
        this.view.startPerf()
        if (this.model.loop) {

            this.proximitySystem.update()

            this.model.entities.forEach(entity => {

                //  Move Stuff
                entity.update(this.model.stage)

                //  See if stuff got hit, including a human finger against a tower
                if (this.model.userInput) {
                    if (this.model.userInput.active) {
                        if (entity.ui
                            && entity.state.visible
                            && entity.state.hittable
                            && !entity.state.hit
                            && entity.hitTest(this.model.userInput.x, this.model.userInput.y)) {

                            entity.hit()
                        }
                    } else {

                        let towerData = {
                            body: { shape: 'circle', width: 30, height: 30 },
                            style: { type: 'image', src: 'bb.png' },
                            state: { hit: false, visible: true, hittable: false },
                            position: { x: this.model.userInput.x, y: this.model.userInput.y, rotation: 0 },
                            currentTarget: { entity: null },
                            children: [],
                            ui: true
                        }
                        const tower = new Tower(towerData)

                        this.model.entities.push(
                            tower
                        )

                        tower.init((entity) => {
                            this.model.entities.push(entity)
                        })
                        this.proximitySystem.addSourceEntity(tower)
                        this.model.userInput = null
                    }
                }

            })

            //  Render the results
            this.view.renderUpdate(this.model.entities)

        }

        requestAnimationFrame(this.update)
        this.view.endPerf()

    }

    /**
     * Accepts an event from the view everytime there is a click or touch and converts it to x/y.
     * @param {Event} event
     */
    applyUserInput = (event) => {
        this.model.userInput = { x: event.pageX, y: event.pageY, active: true }
    }

    /**
     * Accepts an event from the view everytime click or touch ends and converts it to x/y.
     * @param {Event} event
     */
    applyUserInputRelease = (event) => {
        this.model.userInput = { x: event.pageX, y: event.pageY, active: false }
    }

    /**
     * Sets the value of the userInput to null when touches/clicks end.
     */
    removeUserInput = () => {
        this.model.userInput = null
    }

    setStage = (width, height) => {
        this.model.stage = { width: width, height: height }
    }

    stop = () => {
        this.model.loop = false
    }

    play = () => {
        this.model.loop = true
    }

    pause = () => {
        this.model.loop = false
    }
}

export default TowerDefenseController