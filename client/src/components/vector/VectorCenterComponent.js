import Box from "../../entities/ui/containers/Box"

/**
 * Accepts two Vectors and returns the angle between them.
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width
 * @param {Number} height
 * @param {Box} result
 */
const VectorCenterComponent = (x, y, width, height, result) => {
    result.x = x + (width / 2)
    result.y = y + (height / 2)
    return result
}

export default VectorCenterComponent