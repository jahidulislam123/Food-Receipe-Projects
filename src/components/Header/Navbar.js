import React from 'react';
import { Link } from 'react-router-dom';

import logo1 from '../../images/logo.png'

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      
      <div class="avatar ">
  <div class="w-24 rounded-full ">
  <img className='' src={logo1} alt="" />
  </div>
   </div>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
        
      <li><Link  to="/home">Home</Link></li>
      <li><Link  to="/addProduct">Add Product </Link></li>
      <li><Link  to="/">Delete Product </Link></li>
      <li><Link  to="/">Update Product </Link></li> 
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn btn-primary">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;