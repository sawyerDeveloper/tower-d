class TowerDefenseModel {

    constructor(data = null) {

        // Boolean if the game loop is running
        this.loop = false

        // The X and Y of a user's pointer/finger and active bool
        this.userInput = null

        //  TODO make the entities save their .data object in here but leave 
        //  the references to the classes in memory outside of here
        //  I wanted to flatten all data first.
        this.data = data ? data : {
            score: 0,
            wave: 0,
            level: 0,
            money: 0,
            entities: []
        }

        this.stage = {width: 600, height: 650}

        this.entities = []
        
    }

}
export default TowerDefenseModel