import React, { Component } from 'react'
import Board from './Board'
import TowerDController from './TowerDController'

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
    this.controller = new TowerDController(this)
  }

  componentDidMount(){
    this.controller.init()
  }

  update = (data) => {
    console.log(data)

    this.setState({
        score: data.score
    })
  }

  play = () => {
    this.controller.play()
    this.setState({
      currentState: states.PLAY
    })
  }

  render(){
    return  (
      <div style={{width: '100%'}}>
        Tower-D {this.state.currentState}
        <button onClick={this.play}>Play</button>
        <Board />
      </div>
    )
  }
}

export default TowerDefense
