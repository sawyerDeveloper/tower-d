class TowerDefenseModel {

    constructor(data = null) {

        // Boolean if the game loop is running
        this.loop = false

        // The X and Y of a user's pointer/finger
        this.userInput = null

        this.data = data ? data : {
            score: 0,
            wave: 0,
            level: 0,
            enemies: [],
            towers: [],
            grid: []
        }

        this.stage = {width: 600, height: 650}

        // This lets the game loop go really fast on all data from all entities
        this.entities = []

        //  For tracking views we have arrays in here directly but outside of the this.data object.
        this.enemies = []
        this.towers = []
        
    }

}
export default TowerDefenseModel