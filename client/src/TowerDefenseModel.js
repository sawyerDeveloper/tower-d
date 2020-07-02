class TowerDefenseModel {

    constructor(data = null) {

        // Boolean if the game loop is running
        this.loop = false

        // The X and Y of a user's pointer/finger and active bool
        this.userInput = null

        this.data = data ? data : {
            score: 0,
            wave: 0,
            level: 0,
            entities: []
        }

        this.stage = {width: 600, height: 650}

        this.entities = []
        
    }

}
export default TowerDefenseModel