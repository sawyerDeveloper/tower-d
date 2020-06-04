const BodyHitTestComponent = (x, y, width, height, hitX, hitY) => {
    if( hitX > x - width &&
        hitX < x &&
        hitY > y - height&& 
        hitY < y + height){
            return true
    }
    return false 
}

export default BodyHitTestComponent