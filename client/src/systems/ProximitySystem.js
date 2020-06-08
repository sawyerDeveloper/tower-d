import ProximityValueComponent from '../components/vector/ProximityValueComponent'
class ProximitySystem {
    constructor() {
        this.tempArray = []
        this.entitiesToAnalyze = []
        this.sourceEntities = []

    }

    init(entities) {
        this.entitiesToAnalyze = entities
    }

    addSourceEntity(entity) {
        this.sourceEntities.push(entity)
    }

    removeSourceEntity(entity) {

    }

    update() {
        this.sourceEntities.forEach((source) => {

            this.entitiesToAnalyze.forEach((entity) => {

                //  Cheap form of 'broad phase' culling since we only want to do true proximity
                //  calculations on entities within a predictable range of a source entity
                if (entity.position.x > source.position.x - 150
                    && entity.position.x < source.position.x + source.body.width + 50
                    && entity.position.y > source.position.y - 150
                    && entity.position.y < source.position.y + source.body.height + 50
                ) {
                    entity.style.color = 'orange'
                    //this.tempArray.push(entity)
                } else {
                    entity.style.color = 'blue'
                }
            })

            console.log(this.proximity(source, this.tempArray))
            this.tempArray = []
        })

    }

    proximity(source, entities) {
        return entities.map((entity) => {
            return ProximityValueComponent(source, entity)
        })
    }
}

export default ProximitySystem