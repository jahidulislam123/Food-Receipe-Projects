import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import logo1 from '../../images/logo.png'

const Navbar = () => {
  const [user]=useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
  
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
        
      <li><Link  to="/home ">Home</Link></li>
      <li><Link  to="/addProduct">Add Product </Link></li>
      <li><Link  to="/deleteItem">Delete Product </Link></li>
      
      <li>{ user ? <button onClick={logout} class="btn text-white btn-secondary">SignOut</button>: <Link to="/login" class="btn btn-primary">Login</Link>}</li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;