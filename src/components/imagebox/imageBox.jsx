import React from 'react'
import styled from 'styled-components'
import Style from './imagebox.module.scss'

  /** ImageBox accepts these props
   *  * url (url to image)
   *  * width (default 100%)
   *  * height (default 50vh)
   */

    const Img = styled.img`
    object-fit:contain;
    width: ${props => props.width};
    height: ${props => props.height};
    `

    Img.defaultProps = {
    width: "100%",
    height: "auto",
    url: 'https://picsum.photos/1900/400',
    }

function ImageBox(props) {

    const caption = props.caption
    

    return (
    <figure className={Style.imgfigure}>
        <Img src={props.url} alt={caption} {...props}/>
        <figcaption>{caption}</figcaption>
    </figure>
    )
}

export default ImageBox