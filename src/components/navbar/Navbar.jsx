import React from 'react';
import Logo from '../../images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navBody'>
        <nav className='navbar'>
            <section className='navLhs'>
                <img src={Logo} alt="logo" />
            </section>
            <section className='navRhs'>
                {/*this section would be refactored*/}
                <ul className='navUl'>
                    <Link to='/' className='mr'>Home</Link>
                    <Link to='/about' className='mr'>About Us</Link>
                    <Link to='/contact' className='mr'>Contact</Link>
                    <Link to='/membership'>Become a member</Link>            
                </ul>
                <button className='loginBtn'>Login</button>
                <button className='appBtn'>Get the App</button>
            </section>
        </nav>
    </div>
  )
}

export default Navbar