import React from 'react';
import { Link } from 'react-router';


const NavBar = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Link to="/select"><button>Select Varieties</button></Link>
    <Link to="/">Visualize Data</Link>
    <Link to="/blend">Juice Blender (new!)</Link>
    <Link to="/cite">About the Data</Link>
  </div>
);

export default NavBar;
