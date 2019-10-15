import React from 'react'

const VBox = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div style={style}>{props.children}</div>
    )
}

export default VBox