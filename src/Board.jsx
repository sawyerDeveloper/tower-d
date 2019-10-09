import React, { Component } from 'react'

class Board extends Component{

    constructor(props){
        super(props)
        this.state = {
            score: 0,
            level: 0,
            wave: 0,
            babies: 0
        }

    }



    render(){
        const styles = {
            container: {
                width: '100%',
                height: 600,
                backgroundColor: 'grey'
            }
        }
        return (
            <div style={styles.container}>
                Board
                
            </div>
        )
    }

}

export default Board