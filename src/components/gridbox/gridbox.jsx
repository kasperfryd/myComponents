import React from 'react'

function Gridbox (props) {

    const columns = props.columns || "1"
    const rows = props.rows || "1"
    const gap = props.gap || "8px"
    const width = props.width || "100%"
    const height = props.height || "auto"

    const gridbox = {
        display: "grid",
        margin: "auto",
        justifyItems: "center",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}`,
        width : `${width}`,
        height : `${height}`,
    }

    // takes width, height, rows, colums
    return (
        <div style={gridbox}>{props.child}</div>
    )
}

export default Gridbox