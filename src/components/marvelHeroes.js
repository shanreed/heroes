import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Heroes from './heroes';

import '../css/navigation.css';


function Marvel() {
    return (
        <div className = 'marvel'>
            <h1>These are the heroes</h1>
        </div>
        
    )
}

export default Marvel;