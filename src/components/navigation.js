import React from 'react';
import {Route, NavLink} from 'react-router-dom';



import '../css/navigation.css';

import Marvel from './marvelHeroes';

function Navigation() {
    return (
        <div className = 'navigation'>
        <NavLink className = 'nav' exact to = '/'>HOME</NavLink>
        {/* <Route exact path = '/' component = {Home}/> */}
        <NavLink className = 'nav' to = '#'>HEROES FROMA-Z</NavLink>
        <NavLink className = 'nav' to = '/heroes'>MARVEL</NavLink>
        <Route
        exact
        path="/heroes"
        // render={props => (
        //   // <Marvel {...props} marvelHeroesList={avengersData} />
        // )}
      />
        
        <NavLink className = 'nav' to = '#'>HEROES</NavLink>
        <NavLink className = 'nav' to = '#'>DC</NavLink>
        <NavLink className = 'nav' to = '#'>REAL WORLD HEROES</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        <NavLink className = 'nav' to = '#'>ANOTHER</NavLink>
        </div>
        
    )
}

export default Navigation;