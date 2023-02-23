import React from 'react';
import Logo from '../../images/logo.png';
import './Navbar.css';

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
                    <a href='#home' className='mr'>Home</a>
                    <a href='#about' className='mr'>About Us</a>
                    <a href='#contact' className='mr'>Contact</a>
                    <a href='#membership'>Become a member</a>            
                </ul>
                <button className='loginBtn'>Login</button>
                <button className='appBtn'>Get the App</button>
            </section>
        </nav>
    </div>
  )
}

export default Navbar