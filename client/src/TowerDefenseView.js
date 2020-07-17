import React, { Component } from 'react'
import Controller from './TowerDefenseController'
import Stats from 'stats.js'
import VBox from './global/layout/VBox'
import HBox from './global/layout/HBox'

/**
 * View in MVC for game wrapper.
 */
class TowerDefenseView extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
   * Initialize the game engine when the dom is loaded.
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
   * Controller calls this on every frame/data update
   * @param {object} data Updated data regarding score, logic, entity placement
   */
  renderUpdate = (data) => {
    //const p1 = performance.now()
    //  Render the results of the game loop
    this.canvas.getContext('2d').clearRect(0, 0, this.state.width, this.state.height)

    //  Pass the context to each entity to draw itself into.
    data.forEach(entity => {
        entity.render(this.canvas.getContext('2d'))
    })
    //const p2 = performance.now()
    //console.log('perf ', data.length)
  }

  /**
   * Debug
   */
  startPerf = () => {
    this.stats.begin()
  }

  /**
   * Debug
   */
  endPerf = () => {
    this.stats.end()
  }

  render() {

    return (
      <VBox width={this.state.width} height={this.state.height}>
        <HBox marginLeft={100} height={30}>
          <button onPointerDown={this.controller.play}>Play</button>
          <button onPointerDown={this.controller.pause}>Pause</button>
        </HBox>
        <canvas onPointerDown={this.controller.applyUserInput} 
                onPointerUp={this.controller.applyUserInputRelease} 
                onPointerLeave={this.controller.applyUserInputRelease}
                onPointerOut={this.controller.removeUserInput} 
                width={this.state.width} 
                height={this.state.height} 
                ref={canvas => this.canvas = canvas} />
      </VBox>

    )
  }
}

export default TowerDefenseView
