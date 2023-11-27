import React from 'react'

const VBox = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: props.width,
        height: props.height
    }
    return (
        <div style={style}>{props.children}</div>
    )
}

export default VBox