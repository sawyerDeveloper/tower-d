import React from 'react'

const HBox = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: props.marginLeft,
        height: props.height
    }
    return (
        <div style={style}>{props.children}</div>
    )
}

export default HBox