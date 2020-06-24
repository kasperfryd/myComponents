import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Gridbox from './components/gridbox/gridbox'
import ImageBox from './components/imagebox/imageBox'
import Carousel from './components/carousel/carousel';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {

  // Carousel object (required prop for Carousel)
  const carouselItems = {
    item : [
      {img: "https://picsum.photos/900/400", text: "Hello world"},
      {img: "https://picsum.photos/800/400", text: "World Hello"},
      {img: "https://picsum.photos/820/400", text: "Fine day"},
      {img: "https://picsum.photos/880/400", text: "Indeed good sir!"},

    ]
  }

  // Navbar options
  const options = {
    bgcolor : "rgb(50,50,50)",  //required
    textcolor : "white",        //require
    navlinks : [
      {main:"HOME", sub:["FRONTPAGE", "ABOUT"]}, 
      {main:"NEWS", sub:["OLDNEWS", "NEWNEWS"]}, 
      {main: "INFO"}, 
      {main:"LOGIN"},
    ],                          //required
    gap : 7,                    //required [1 - 12]
    height : "60px",            //optional
    fontsize : "0.9rem",        //optional
  }


  /* Gridbox accepts these props; 
      * height (default auto)
      * width (default 100%)
      * rows  (default 1)
      * columns (default 1)
      * gap (default 8px)
      * child (requires content in grid)
  */

  /** Carousel accepts these props
      * height (default 45vh)
      * items (object with array of items)
      * delay (in whole seconds - default 7 seconds)
  */

  /** ImageBox accepts these props
   *  * url (url to image)
   *  * width (default 100%)
   */

  return (

    <Router>
    <Navbar options={options}/>
      <Switch>
        <Route path="/oldnews">
          <Gridbox columns="3" rows="1" width="100%" child = {<>
            <p>Hello world Hello world Hello world</p>
            <p>Hello world Hello world Hello world</p>
            <p>Hello world Hello world Hello world</p>
            <p>Hello world Hello world Hello world</p>
            <p>Hello world Hello world Hello world</p>
            <p>Hello world Hello world Hello world</p>
          </>}>
          </Gridbox>
        </Route>
        <Route path="/newnews">
          <>
          <h3>THESE NEW IMAGES</h3>
          <ImageBox />
          <ImageBox url="https://picsum.photos/900/400" width="50%"></ImageBox>
          </>
        </Route>
        <Route path="/info">
          <h3>INFO</h3>
          <Carousel delay="8" height="50vh" items={carouselItems}></Carousel>
        </Route>
        <Route path="/">
          <h3>HOME</h3>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;