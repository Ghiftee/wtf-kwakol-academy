import React from 'react';
import Logo from '../../../images/logo.png';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-section'>
        <section className='footer-bottom-section-lhs'>
            <img src={Logo} alt='logo' className='footer-img'/>
            <div>
            <FaFacebook className='footer-icons footer-mr'/>
            <FaTwitter className='footer-icons footer-mr'/>
            <FaInstagram className='footer-icons footer-mr'/>
            <FaLinkedin className='footer-icons'/>
        </div>
        </section>
        <section className='footer-bottom-section-rhs'>
            {/* would be refactored */}
            <section>
                <p className='footer-p-2'>Company</p>
                <p className='footer-p-3'>About Us</p>
                <p className='footer-p-3'>Contact Us</p>
                <p className='footer-p-3'>Partner</p>
                <p className='footer-p-3'>Help Desk</p>
            </section>
            <section>
                <p className='footer-p-2'>Courses</p>
                <p className='footer-p-3'>Trading Quiz</p>
                <p className='footer-p-3'>Kwakol Markets</p>
            </section>
            <section>
                <p className='footer-p-2'>Resources</p>
                <p className='footer-p-3'>Blogs</p>
                <p className='footer-p-3'>Privacy Policy</p>
                <p className='footer-p-3'>Terms of Use</p>
                <p className='footer-p-3'>Refund Policy</p>
            </section>
        </section>
        <div className='border'/>
    </div>
   
  )
}

export default Footer;