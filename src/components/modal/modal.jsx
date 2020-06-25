import React from 'react'

function Modal (props) {

    const child = props.child || "No content"
    const visible = props.visible || false
    const setModalVisible = props.setModalVisible
    const shown = {
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(22,22,22,0.5)",
        position: "absolute",
        top: "0",
        left: "0",
    }
    
    const modalContent = {
        position: "fixed",
        display: "block",
        width: "50vw",
        height: "25vh",
        backgroundColor: "rgb(245,245,245)",
        position: "relative",
        transform: "translateX(50%) translateY(50%)",
        padding: "8px",
        borderRadius: "4px",
        boxShadow: "0px 6px 8px 1px rgba(0,0,0,0.2)",
    }
    const hidden = {
        display: "none",
    }

    return (
        <section onClick={()=>setModalVisible(false)} style={visible ? shown : hidden}>
            <div style={modalContent}>{child}</div>
        </section>
    )
}

export default Modal