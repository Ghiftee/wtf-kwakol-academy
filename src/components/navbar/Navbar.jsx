import React from 'react';
import Logo from '../../images/logo.png';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom'; 

function Navbar(props) {
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        navigate('/login')
    }
  return (
    <div style={{backgroundColor: props.backgroundColor || 'var(--primaryBackground)', padding: props.padding || '32px 0'}}>
        <nav className='navbar'>
            <section className='navLhs'>
                <img src={Logo} alt="logo" />
            </section>
            <section className='navRhs'>
                {/*this section would be refactored*/}
                <ul className='navUl'>
                    {/* <NavLink to='/' className={isActive ? 'active-link mr' : 'inactive-link mr'} style={({ isActive }) => ({color: isActive? 'var(--primaryColor)' : 'black'})} className='mr'>Home</NavLink> */}
                    <NavLink to='/' style={({ isActive }) => ({color: isActive? 'var(--primaryColor)' : 'black'})} className='mr'>Home</NavLink>
                    <NavLink to='/about' style={({ isActive }) => ({color: isActive? 'var(--primaryColor)' : 'black'})} className='mr'>About Us</NavLink>
                    <NavLink to='/contact' style={({ isActive }) => ({color: isActive? 'var(--primaryColor)' : 'black'})} className='mr'>Contact</NavLink>
                    <NavLink to='/membership' style={({ isActive }) => ({color: isActive? 'var(--primaryColor)' : 'black'})}>Become a member</NavLink>            
                </ul>
                <button onClick={navigateToLoginPage} className='loginBtn'>Login</button>
                <button className='appBtn'>Get the App</button>
            </section>
        </nav>
    </div>
  )
}

export default Navbar