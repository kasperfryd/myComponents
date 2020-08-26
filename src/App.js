import React from 'react';
import Navbar from './components/navbar/navbar'
import FrontPage from './pages/frontpage/frontpage';
import CookieBanner from './components/cookie/cookie';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SortPage from './pages/sortpage/sortpage';
import GridboxPage from './pages/gridboxpage/gridboxpage';
import ImageBoxPage from './pages/imageboxpage/imageboxpage';
import CarouselPage from './pages/carouselpage/carouselpage';
import AccordionPage from './pages/accordionpage/accordionpage';
import ModalPage from './pages/modalpage/modalpage';
import LoginPage from './pages/loginpage/loginpage';

function App() {

  // Navbar options
  const navOptions = {
    height: "50px",
    navlinks : [
      {main:"HOME"}, 
      {main:"COMPONENTS", sub:["GRIDBOX", "IMAGEBOX", "CAROUSEL", "MODAL", "ACCORDION"]}, 
      {main: "FUNCTIONS", sub:["SORT"]}, 
      {main:"LOGIN"},
    ],
    search: true,
  }

  return (

    <Router>
    <Navbar options={navOptions}/>
    <CookieBanner/>
      <Switch>
        <Route path="/gridbox">
          <GridboxPage/>
        </Route>
        <Route path="/imagebox">
          <ImageBoxPage/>
        </Route>
        <Route path="/carousel">
          <CarouselPage/>
        </Route>
        <Route path="/accordion">
          <AccordionPage/>
        </Route>
        <Route path="/modal">
          <ModalPage/>
        </Route>
        <Route path="/sort">
          <SortPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <FrontPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;