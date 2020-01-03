import React from 'react';
import {Route, NavLink} from 'react-router-dom';



import Home from './components/home';
import Legends from './components/legends';
import Heroes from './components/heroes';
import Name from './components/name';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className = 'body'>
      <Home/>
    
      <Legends />
      <Name />
      
      <Heroes/>
      <Footer />
    </div>
  );
}

export default App;
