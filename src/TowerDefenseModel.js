class TowerDefenseModel {

    constructor(data = null) {

        // Boolean if the game loop is running
        this.loop = false

        // The X and Y of a user's pointer/finger
        this.userInput = {x: 0, y: 0}

        this.data = data ? data : {
            score: 0,
            wave: 0,
            level: 0,
            enemies: [
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'brown'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 0, y: 50} },
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'red'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 100, y: 150} },
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'grey'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 200, y: 250} },
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'green'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 300, y: 350} },
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'yellow'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 400, y: 450} },
                {   body: {shape: 'rectangle', width: 100, height: 40}, 
                    style: {color: 'pink'}, 
                    vector: { velocity: 1, x: 0, y: 1 }, 
                    position: {x: 500, y: 550} }
            ],
            towers: [],
            grid: []
        }
    }

    update = () => {

    }

}
export default TowerDefenseModel