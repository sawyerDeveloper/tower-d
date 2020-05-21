import React, { Component } from 'react'
import Controller from './TowerDefenseController'
import Stats from 'stats.js'
import VBox from './global/layout/VBox'
import HBox from './global/layout/HBox'

const states = {
  INIT: 'init',
  PLAY: 'play',
  PAUSE: 'pause',
  WIN: 'win',
  LOSE: 'lose'
}

/**
 * View in MVC for game wrapper.
 */
class TowerDefenseView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentState: states.INIT,
      width: 0,
      height: 0
    }
    this.canvas = null
    //  Temp for testing
    this.stats = new Stats()
    this.stats.showPanel(0)

    //  Instantiate the class that runs the loop and controls the model
    this.controller = new Controller(this)
  }

  /**
   * Initialize the game engine when the dom is laoded.
   */
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
    window.dispatchEvent(new Event('resize'))

    //  Temp for testing.
    document.body.appendChild(this.stats.dom)

    //  Initialize the data.
    this.controller.init()
  }

  /**
   * Listen for changes in the window size.
   */
  updateDimensions = (event) => {
    this.setState({
      width: event.target.innerWidth,
      height: event.target.innerHeight
    }, () => {
      this.controller.setStage(this.state.width, this.state.height)
    })
  }

  /**
   * Controller tells this class what state the overall game should be in
   * @param {string} newState Derived from states const 
   */
  updateCurrentState = (newState) => {
    this.setState({
      currentState: states[newState]
    })
  }

  /**
   * Controller calls this on every frame/data update
   * @param {object} data Updated data regarding score, logic, entity placement
   */
  renderUpdate = (data) => {
    this.stats.begin()

    //  Render the results of the game loop
    this.canvas.getContext('2d').clearRect(0, 0, this.state.width, this.state.height)
    data.forEach(entity => {
        entity.render(this.canvas.getContext('2d'))
    })

    this.stats.end()
  }

  render() {

    return (
      <VBox width={this.state.width} height={this.state.height}>
        <HBox marginLeft={100} height={50}>
          <button onClick={this.controller.play}>Play</button>
          <button onClick={this.controller.pause}>Pause</button>
        </HBox>
        <canvas onMouseDown={this.controller.applyUserInput} 
                onMouseUp={this.controller.removeUserInput} 
                onMouseOut={this.controller.removeUserInput} 
                width={this.state.width} 
                height={this.state.height} 
                ref={canvas => this.canvas = canvas} />
      </VBox>

    )
  }
}

export default TowerDefenseView
