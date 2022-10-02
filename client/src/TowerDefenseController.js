import Model from './TowerDefenseModel'
import Enemy from './entities/enemies/Enemy'

import { gameData } from './data/gameData'
import Tower from './entities/towers/Tower'

import ProximitySystem from '../src/systems/ProximitySystem'
import Image from './entities/ui/Image'
import Label from './entities/ui/Label'
import Base from './entities/towers/Base'
import CountdownSystem from './systems/CountdownSystem'
import { shapes } from './utils/RenderUtils'

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
        this.countdownSystem = new CountdownSystem()

    }

    /**
     * Initializes the game by telling the model to get data and 
     * prepare for more data in memory.
     * Can be called multiple times in a game.
     */
    init = () => {

        const level = this.model.data.level

        this.addEnemies()

        this.base = new Base({
            body: { shape: 'circle', width: 40, height: 40 },
            style: { type: 'image', src: 'base.png' },
            state: { hit: false, visible: true, hittable: false, health: 20 },
            position: { x: 600, y: 475, rotation: 0 },
            children: []
        })

        this.model.data.entities.push(this.base)

        this.levelLabel = new Label({
            body: { shape: shapes.TEXT, width: 150, height: 100 },
            style: { type: shapes.TEXT, color: 'white', size: 24, font: 'sans-serif', textAlign: 'center' },
            state: { hit: false, visible: true, hittable: false, labelText: 'test' },
            position: { x: 300, y: 30, rotation: 0 },
            children: []
        })

        this.model.data.entities.push(this.levelLabel)

        let bg = new Image({
            body: { shape: 'circle', width: 600, height: 600 },
            style: { type: 'image', src: gameData.levels[level].backgroundImage },
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

        //temp for testing
        this.model.loop = true

        this.model.data.entities.reverse()

        //  Start the loop by asking for this.update to be called every frame.
        requestAnimationFrame(this.update)
    }

    addEnemies = () => {

        const { level, wave } = this.model.data

        // Get level data into memory
        this.model.data.entities = gameData.levels[level].waves[wave].map(enemyData => {
            //  Crazy looking, but reassigning the path array based on referencing the path array index in the initial data
            enemyData.path = gameData.config.paths[enemyData.path]
            return new Enemy(enemyData, this.baseAttack, this.enemyKill)
        })
        const enemies = this.model.data.entities.filter(entity => entity instanceof Enemy)
        this.proximitySystem.init(enemies)
        this.countdownSystem.init(this.countdownCallback, enemies.length)
    }
    /**
     * This is the pulse of the game. 
     * The main loop runs here and runs through every entity calling update, render etc.
     */
    update = () => {

        const p1 = performance.now()
        this.view.startPerf()
        if (this.model.loop) {
            this.levelLabel.text = "Level: " + this.model.data.level + " " +
                "Wave: " + this.model.data.wave + " " +
                "Score: " + this.model.data.score + " " +
                "Money: " + this.model.data.money

            this.proximitySystem.update()

            this.countdownSystem.update()

            var entities = this.model.data.entities
            for(var i = 0 ; i < entities.length ; i++){
                var entity = entities[i]
                //  Move Stuff
                entity.update(this.model.stage)

                //  See if stuff got hit, including a human finger against a tower/button
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
                        //  Place a tower
                        let towerData = {
                            body: { shape: 'circle', width: 30, height: 30 },
                            style: { type: 'image', src: 'bb.png' },
                            state: { hit: false, visible: true, hittable: false },
                            position: { x: this.model.userInput.x, y: this.model.userInput.y, rotation: 0 },
                            currentTarget: { entity: null },
                            children: [],
                            ui: true
                        }
                        const tower = new Tower(towerData, this.addPoints)

                        this.model.data.entities.push(tower)

                        tower.init((entity) => {
                            this.model.data.entities.push(entity)
                        })

                        this.proximitySystem.addSourceEntity(tower)
                        this.model.userInput = null
                    }
                }
            }

            //  Render the results
            this.view.renderUpdate(this.model.data.entities)

        }

        requestAnimationFrame(this.update)
        this.view.endPerf()
        const p2 = performance.now()
        console.log('perf ', p2 - p1)
    }

    countdownCallback = () => {
        //this.addEnemies()
        this.model.data.wave++
    }

    baseAttack = () => {
        this.base.state.health--
    }

    addPoints = (points) => {
        this.model.data.score += points
    }

    enemyKill = (money) => {
        this.model.data.money += money
        this.countdownSystem.tick()
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