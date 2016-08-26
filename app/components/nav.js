import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div style={{display: 'flex', justifyContent: 'center' }}>
    <Link activeStyle={{backgroundColor: '#9EBC9E'}} style={{backgroundColor: 'khaki'}} to="/select">
      <button style={{fontFamily: '"Linden Hill", serif', fontSize: '1.2em',
                      padding: '.25em .5em', backgroundColor: 'inherit'}} >Select Varieties</button>
    </Link>
    <Link activeStyle={{backgroundColor: '#9EBC9E'}} style={{backgroundColor: 'khaki'}} to="/viz">
      <button style={{fontFamily: '"Linden Hill", serif', fontSize: '1.2em',
                      padding: '.25em .5em', backgroundColor: 'inherit'}} >Visualize Data</button>
    </Link>
    <Link activeStyle={{backgroundColor: '#9EBC9E'}} style={{backgroundColor: 'khaki'}} to="/blend">
      <button style={{fontFamily: '"Linden Hill", serif', fontSize: '1.2em',
                      padding: '.25em .5em', backgroundColor: 'inherit'}} >Juice Blender (new!)</button>
    </Link>
    <Link activeStyle={{backgroundColor: '#9EBC9E'}} style={{backgroundColor: 'khaki'}} to="/cite">
      <button style={{fontFamily: '"Linden Hill", serif', fontSize: '1.2em',
                      padding: '.25em .5em', backgroundColor: 'inherit'}} >About the Data</button>
    </Link>
    
  </div>
);

export default NavBar;
