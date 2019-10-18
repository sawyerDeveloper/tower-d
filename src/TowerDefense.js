import React, { Component } from 'react'
import Board from './Board'
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

class TowerDefense extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentState: states.INIT
    }
    this.stats = new Stats()
    this.stats.showPanel( 0 )
    this.controller = new Controller(this, states)
  }

  /**
   * Initialize the game engine.
   */
  componentDidMount(){
    document.body.appendChild( this.stats.dom )
    this.controller.init()
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
   * @param {boolean} stateDataChanged If something changed that should be reflected in React
   */
  update = (data, stateDataChanged = false) => {
    this.stats.begin();
    //console.log(data, stateDataChanged)

    //  Render the results of the game loop
    this.board.update(data)
  
    //  Only update React if a major change occurs that updates a react view
    if(stateDataChanged){
      this.setState({
        score: data.score
      })
    }
    
    this.stats.end();
  }

  /**
   * Accept and pass user input to controller for interpretation
   */
  applyUserInput = (event) => {
    this.controller.applyUserInput(event)
  }

  /**
   * Remove human interaction from controller
   */
  removeUserInput = () => {
    this.controller.removeUserInput()
  }

  

  render(){

    return  (
      <VBox width={600} height={650}>
        <HBox marginLeft={100} height={50}>
          <button onClick={this.controller.play}>Play</button>
          <button onClick={this.controller.pause}>Pause</button>
          <div>{this.state.currentState}</div>
        </HBox>
        <Board applyUserInput={this.applyUserInput} ref={board => this.board = board} score={this.state.score}/>
      </VBox>

    )
  }
}

export default TowerDefense
