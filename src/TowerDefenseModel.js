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

        this.enemies = []
    }

    update = () => {

    }

}
export default TowerDefenseModel