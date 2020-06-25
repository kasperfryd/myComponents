import React, {useState} from 'react'

function Accordian(props) {
    
    
    const child = props.child || "No child content selected"
    const width = props.width || "auto"
    const title = props.title || "Accordian"
    const bgcolor = props.bgcolor || "rgb(120, 120, 240)"
    const fontsize = props.fontsize || "1.3rem"


    const [active, setActive] = useState(false)
    
    const shown = {
        height: "auto",
        display: "block",
        transition: "all 0.4s ease-out",
        width: `${width*2}`,
        textAlign: "center",
        padding: "16px",
        margin: "auto",
    }
    const hidden = {
        display: "none",
    }

    const accordian = {
        margin: "auto",
        width: `${width*2}`,
        fontSize: `${fontsize}`,
        cursor: "pointer",
        transition: "all, 0.4s ease",
        textAlign: "center",
        padding: "16px",
        backgroundColor: `${bgcolor}`,
        color: "white",
    }

    const wrapper = {
        boxShadow: "0px 6px 8px 1px rgba(0,0,0,0.2)",
        width: `${width}`,
        padding: "0",
        margin: "auto",
    }


    return (
    <section style={wrapper}>
    <div style={accordian} onClick={() => {active ? setActive(false): setActive(true)}} >{title}</div>
    <div style={active ? shown: hidden}>{child}</div>
    </section>
    )
}

export default Accordian