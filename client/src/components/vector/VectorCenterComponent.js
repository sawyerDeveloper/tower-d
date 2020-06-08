const VectorCenterComponent = (x, y, width, height, result) => {
    result.x = x + (width / 2)
    result.y = y + (height / 2)
    return result
}

export default VectorCenterComponent