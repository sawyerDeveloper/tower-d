const ProximityValueComponent = (source, target) => {
    return Math.sqrt(  ( source.center().x - target.center().x ) * ( source.center().x - target.center().x ) 
                        + ( source.center().y - target.center().y ) * ( source.center().y - target.center().y ) )
}

export default ProximityValueComponent