import Vector from "../../types/Vector"

/**
 * Accepts two Vectors and returns the angle between them.
 * @param {Vector} source 
 * @param {Vector} target 
 * @param {Number} result
 */
const VectorAngleComponent = (origin, target, result) => {
    result = Math.atan2(-(origin.y - target.y), -(origin.x - target.x)); 
    result *= 180 / Math.PI        
    if (result < 0) result += 360  
    return result
}
export default VectorAngleComponent