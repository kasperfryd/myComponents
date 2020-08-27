import React from 'react'
import Gridbox from '../../components/gridbox/gridbox'
import ImageBox from '../../components/imagebox/imageBox'

function GridboxPage(){

    return (
      <>
      <h1>Gridbox component</h1>
        <Gridbox columns="6" rows="1" gap="8px" width="75%" child = {
            <>
              <ImageBox height="25vh" url={"https://picsum.photos/601/622"} caption={"Image 1"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/632/602"} caption={"Image 2"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/613/652"} caption={"Image 3"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/634/642"} caption={"Image 4"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/645/672"} caption={"Image 5"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/626/655"} caption={"Image 6"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/607/611"} caption={"Image 7"}/>
              <ImageBox height="25vh" url={"https://picsum.photos/600/612"} caption={"Image 8"}/>
            </>
          }>
          </Gridbox>
    </>
    )

}

export default GridboxPage