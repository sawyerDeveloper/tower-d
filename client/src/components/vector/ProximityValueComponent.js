import Vector from "../../types/Vector"

/**
 * Accepts two Entities and returns the distance between them.
 * @param {Vector} source 
 * @param {Vector} target 
 */
const ProximityValueComponent = (source, target) => {
    return Math.sqrt((source.x - target.x) * (source.x - target.x)
                    + (source.y - target.y) * (source.y - target.y))
}

export default ProximityValueComponent