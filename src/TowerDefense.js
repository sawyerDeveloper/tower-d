import React, { Component } from 'react'
import Board from './Board'
import Controller from './TowerDefenseController'

const states = {
  INIT: 'init',
  PLAY: 'play',
  WIN: 'win',
  LOSE: 'lose'
}

class TowerDefense extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentState: states.INIT
    }

    this.controller = new Controller(this, states)
  }

  /**
   * Initialize the game engine.
   */
  componentDidMount(){
    this.controller.init()
  }

  /**
   * Controller tells this class what state the overall game should be in
   * @param newState Derived from states const 
   */
  updateCurrentState = (newState) => {
    this.setState({
      currentState: newState
    })
  }

  /**
   * Controller calls this on every frame/data update
   * @param data Updated data regarding score, logic, entity placement
   */
  update = (data) => {
    //console.log(data)

    this.setState({
        score: data.score
    })
  }

  play = () => {
    this.controller.play()
  }

  render(){
    return  (
      <div style={{width: '100%'}}>
        Tower-D {this.state.currentState}
        <button onClick={this.play}>Play</button>
        <Board score={this.state.score}/>
      </div>
    )
  }
}

export default TowerDefense
