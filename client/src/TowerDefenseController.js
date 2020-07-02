import Model from './TowerDefenseModel'
import Enemy from './entities/enemies/Enemy'

import { gameData } from './data/gameData'
import Tower from './entities/towers/Tower'

import ProximitySystem from '../src/systems/ProximitySystem'
import Image from './entities/ui/Image'
import Label from './entities/ui/Label'
import Base from './entities/towers/Base'


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
        this.model.data.entities = gameData.levels[this.model.data.level].waves[this.model.data.wave].map(enemyData => {
            return new Enemy(enemyData, this.baseAttack)
        })
        console.log(gameData.levels[this.model.data.level].waves[this.model.data.wave][0].class)
        let en = new gameData.levels[this.model.data.level].waves[this.model.data.wave][0].class(gameData.levels[this.model.data.level].waves[this.model.data.wave][0])
        console.log(en)

        this.base = new Base({
            body: { shape: 'circle', width: 40, height: 40 },
            style: { type: 'image', src: 'base.png' },
            state: { hit: false, visible: true, hittable: false, health: 20 },
            position: { x: 600, y: 475, rotation: 0 },
            children: []
        })

        this.model.data.entities.push(this.base)

        this.levelLabel = new Label(150, 30, 100, 100, 0, 'blue', this.model.data.level + " " + this.model.data.wave, 'sans-serif', 24, 'center')

        this.model.data.entities.push(this.levelLabel)

        let bg = new Image({
            body: { shape: 'circle', width: 600, height: 600 },
            style: { type: 'image', src: 'bg.jpg' },
            state: { hit: false, visible: true, hittable: false },
            position: { x: 600, y: 600, rotation: 0 },
            children: []
        })

        this.model.data.entities.push(bg)

        //  Go through entities and pull out any children and add them to the list.  
        //  TODO deal with this being fully recursive
        this.model.data.entities.forEach((entity) => {
            if (entity.children.length > 0) {
                entity.init((entity) => {
                    this.model.data.entities.push(entity)
                })
            }
        })
        this.proximitySystem.init(this.model.data.entities.filter(entity => entity.constructor.name === 'Enemy'))

        //temp for testing
        this.model.loop = true

        this.model.data.entities.reverse()

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

            this.levelLabel.text = this.model.data.level + " " + this.model.data.wave

            this.proximitySystem.update()

            this.model.data.entities.forEach(entity => {

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

                        this.model.data.entities.push(
                            tower
                        )

                        tower.init((entity) => {
                            this.model.data.entities.push(entity)
                        })
                        this.proximitySystem.addSourceEntity(tower)
                        this.model.userInput = null
                    }
                }

            })

            //  Render the results
            this.view.renderUpdate(this.model.data.entities)

        }

        requestAnimationFrame(this.update)
        this.view.endPerf()

    }


    baseAttack = () => {
        this.base.state.health--
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