import React from 'react'
import Gridbox from '../../components/gridbox/gridbox'
import ImageBox from '../../components/imagebox/imageBox'
import '../../components/theme/global.scss'


function ImageBoxPage(){

return ( 
  <section className={"mainContainer"}>
  <h1>ImageBox component</h1>
    <Gridbox columns="3" gap="16px" child = {
      <>
          <ImageBox url={"https://picsum.photos/600/612"} width="100%" height="400px" caption={"Image1"}></ImageBox>
          <ImageBox url={"https://picsum.photos/600/610"} width="100%" height="400px" caption={"Image2"}></ImageBox>
          <ImageBox url={"https://picsum.photos/600/620"} width="100%" height="400px" caption={"Image3"}></ImageBox>
          <ImageBox url={"https://picsum.photos/600/622"} width="100%" height="400px" caption={"Image4"}></ImageBox>
          <ImageBox url={"https://picsum.photos/600/603"} width="100%" height="400px" caption={"Image5"}></ImageBox>
          <ImageBox url={"https://picsum.photos/600/626"} width="100%" height="400px" caption={"Image6"}></ImageBox>
      </>
        }/>
    </section>
  )
}

export default ImageBoxPage