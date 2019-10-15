class TowerDefenseModel {

    constructor(data = null) {

        // Boolean if the game loop is running
        this.loop = false
        this.data = data ? data : {
            score: 0,
            wave: 0,
            level: 0,
            enemies: [
                { x: 0, y: 0, width: 100, height: 4, color: 'white' },
                { x: 100, y: 0, width: 100, height: 4, color: 'red' },
                { x: 200, y: 0, width: 100, height: 4, color: 'grey' },
                { x: 300, y: 0, width: 100, height: 4, color: 'green' },
                { x: 400, y: 0, width: 100, height: 4, color: 'yellow' },
                { x: 500, y: 0, width: 100, height: 4, color: 'pink' }
            ],
            towers: [],
            grid: []
        }
    }

    update = () => {

    }

}
export default TowerDefenseModel