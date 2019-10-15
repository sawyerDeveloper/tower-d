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
    this.controller.init()
    
    document.body.appendChild( this.stats.dom )
  }

  /**
   * Controller tells this class what state the overall game should be in
   * @param newState Derived from states const 
   */
  updateCurrentState = (newState) => {
    this.setState({
      currentState: states[newState]
    })
  }

  /**
   * Controller calls this on every frame/data update
   * @param data Updated data regarding score, logic, entity placement
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
  updateUserInput = (data) => {
    this.controller.updateUserInput(data)
  }

  render(){

    return  (
      <VBox>
        <HBox marginLeft={100}>
          <button onClick={this.controller.play}>Play</button>
          <button onClick={this.controller.pause}>Pause</button>
        </HBox>
        <Board updateUserInput={this.updateUserInput} ref={board => this.board = board} score={this.state.score}/>
      </VBox>

    )
  }
}

export default TowerDefense
