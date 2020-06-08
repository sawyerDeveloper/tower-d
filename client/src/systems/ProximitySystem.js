import ProximityValueComponent from '../components/vector/ProximityValueComponent'
class ProximitySystem {
    constructor() {
        this.tempArray = []
        this.entitiesToAnalyze = []
        this.sourceEntities = []
        this.resultArray = []

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
                    && entity.position.x < source.position.x + source.body.width + 100
                    && entity.position.y > source.position.y - 150
                    && entity.position.y < source.position.y + source.body.height + 100
                ) {
                    this.tempArray.push(entity)
                }
            })

            this.proximity(source, this.tempArray)
            this.tempArray = []
        })

    }

    proximity(source, entities) {
        this.resultArray = entities.map((entity) => {
            return {...entity, distance: ProximityValueComponent(source, entity)}
        }).sort((entity1, entity2) => {
            return entity1.distance - entity2.distance
        })
    }
}

export default ProximitySystem