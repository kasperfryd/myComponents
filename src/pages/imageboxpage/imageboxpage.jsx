import React from 'react'
import Gridbox from '../../components/gridbox/gridbox'
import ImageBox from '../../components/imagebox/imageBox'


function ImageBoxPage(){

return ( 
    <Gridbox columns="3" gap="16px" child = {
        <>
        <ImageBox url={"https://picsum.photos/600/612"} width="100%" caption={"Image1"}></ImageBox>
        <ImageBox url={"https://picsum.photos/600/610"} width="100%" caption={"Image2"}></ImageBox>
        <ImageBox url={"https://picsum.photos/600/620"} width="100%" caption={"Image3"}></ImageBox>
        </>
      }/>
)
}

export default ImageBoxPage