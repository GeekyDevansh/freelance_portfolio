import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MatchMyService from '../pages/MatchMyService';
import VkiwiTech from '../pages/VkiwiTech';
import ModaOnlineShopping from '../pages/ModaOnlineShopping';
import Raktbank from '../pages/RaktBank';
import App from '../App';

const AnimatedRoutes = () => {

    const location= useLocation();

  return (
    <Routes key={location.pathname} location={location} >
    <Route exact path='/' element={<App/>} />
    <Route exact path='/matchmyservice' element={<MatchMyService/>} />
    <Route exact path='/vkiwitech' element={<VkiwiTech/>} />
    <Route exact path='/modaonlineshopping'  element={<ModaOnlineShopping/>}/>
    <Route exact path='/raktbank'  element={<Raktbank/>}/>
      </Routes>
  )
}

export default AnimatedRoutes