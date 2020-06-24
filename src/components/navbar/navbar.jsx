import React from 'react'
import {
    Link,
  } from 'react-router-dom';

import Style from '../navbar/navbar.module.scss'


function Navbar(props){
    
    const options = props.options
    const navLinks = options.navlinks
    const navStyle = {
        width: "100%",
        backgroundColor: options.bgcolor,
        display: "grid",
        placeContent: "center",
        gridTemplateColumns: `${options.gap}fr repeat(${navLinks.length}, 1fr)`,
        gap: "8px",
        height: `${options.height || "40px"}`,
        boxShadow: "0px 3px 12px 0px rgba(0,0,0,0.75)",
        fontSize: `${options.fontsize || "1rem"}`
    }

    const linkStyle={
        color: options.textcolor,
        height: "100%",
        margin:"auto",
        display: "inline-block",
        padding: "auto",
        textDecoration: "none",
        textUnderline: "none",
        curser: "pointer",
    }

    const sublinkStyle={
        color: options.textcolor,
        height: "100%",
        display: "block",
        padding: "auto",
        textDecoration: "none",
        textUnderline: "none",
    }
    
    return(
        <nav style={navStyle}>
            <span/>
            {navLinks && navLinks.map((item,i) => {
                if (!item.sub){
                    return <Link style={linkStyle} key={i} className={item.sub ? Style.dropdown : ""} to={item.main.toLowerCase()}>
                                {item.main}      
                            </Link>
                }
                else{
                    return(
                    <div style={linkStyle} key={i}>
                        <div key={i} className={item.sub ? Style.dropdown : ""}>
                        <p>{item.main}</p>
                        {item.sub && 
                            <div className={Style.dropdownContent} style={{backgroundColor:options.bgcolor}}>
                                {item.sub && item.sub.map((sub, i) => {
                                return <Link key={i} style={sublinkStyle} to={sub.toLowerCase()}>{sub}</Link>
                            })}
                            </div>
                        }           
                        </div>
                    </div>
                    )
                }
            })}
        </nav>
    )

}

export default Navbar