import React from 'react';
// import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div>       
<nav className='shadow-lg'>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fa fa-bars"></i>
        </label>
        <label  class="logo"><img src='/assets/logo.jpg' alt='logo'/>  </label>
        <ul className='navbar_link'>
            <li><a  href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Products</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <div className='heading'>
    <div className='header'>
    <h2>VISHWAKARMA FOUNDARY WORKS</h2>
    </div>
    </div>

    

        </div>
    );
}

export default Navbar;
