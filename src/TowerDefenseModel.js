class TowerDefenseModel{

    constructor(){
        this.data = {
            score: 0,
            wave: 0,
            level: 0,
            baddies: [],
            towers: [],
            grid: []
        }
    }

    addTower = (tower) => {
        this.data.towers.push(tower)
    }

    
}
export default TowerDefenseModel