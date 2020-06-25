
/**
 * Accepts a position and vector and writes the cardinal directions into the vector.
 * @param {Position} position
 * @param {Vector} vector
 */
const VectorDirectionComponent = (position, vector) => {
    vector.x = dir[Math.ceil(position.rotation)].x
    vector.y = dir[Math.ceil(position.rotation)].y
}

const dir = {
    0: {x:.5, y:0},
    90: {x:0, y:.5},
    180: {x:-.5, y:0},
    270: {x:0, y:-.5}
}

export default VectorDirectionComponent