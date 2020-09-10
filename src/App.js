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
import TimePage from './pages/timepage/timepage';
import FormPage from './pages/formpage/formpage';
import MobileNavBar from './components/mobilenavbar/mobilenavbar';
import HookBasketPage from './pages/hookform/hookformpage'
import { useMediaQuery } from 'react-responsive'

function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Router>
    {!isTabletOrMobile && <Navbar/>}
    {isTabletOrMobile && <MobileNavBar/>}
    <CookieBanner/>
      <Switch>
        <Route path="/basket">
          <HookBasketPage/>
        </Route>
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
        <Route path="/time">
          <TimePage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/form">
          <FormPage/>
        </Route>
        <Route path="/home">
          <FrontPage/>
        </Route>
        <Route exact path="/">
          <FrontPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;