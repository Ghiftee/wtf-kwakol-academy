import React from 'react';
import Navbar from '../../navbar/Navbar';
import './Contact.css';
import Footer from '../home/Footer';

function Contact() {
  return (
    <>
      <div className='contact-section'>
        <Navbar backgroundColor='#c2eecc' padding='10px 0'/>
        <div className='contact-puzzle'>
          <section className='contact-puzzle-text'>
            <h2 className='contact-puzzle-text-h2'>Contact Us Now</h2>
            <p className='contact-puzzle-text-p-1'>
              If you have any questions about our services, would like to request a brochure <br/>
              or request a call back please use the form and we will get back to you as soon <br/>
              as possible.
            </p>
            <section>
              <h3 className='contact-puzzle-text-h3'>Our Company</h3>
              <p className='contact-puzzle-text-p-2 mb'>Kwakol academy</p>
            </section>
            <h3 className='contact-puzzle-text-h3'>Contacts</h3>
            <p className='contact-puzzle-text-p-2'>08023399491</p>
          </section>
          <span className='contact-puzzle-span'>
            1st floor, Mall 169, <br/>
            Adetokunbo Ademola <br/>
            Crescent, Wuse II, Abuja,<br/>
            Nigeria
          </span>
        </div>
        <section>
          <p className='contact-form-p'>Or you can contact us via filling the form</p>
          <form className='contact-form'>
            <label for='name' className='contact-form-label'>Your name</label>
            <input type='text' className='contact-form-input'/>
            <label for='email' className='contact-form-label'>Your Email</label>
            <input type='email' className='contact-form-input'/>
            <label for='p-number' className='contact-form-label'>Your Phone Number</label>
            <input type='number' className='contact-form-input'/>
            <label for='subject' className='contact-form-label'>Subject</label>
            <input type='text' className='contact-form-input'/>
            <label for='msg' className='contact-form-label'>Your message</label>
            <textarea name='msg' className='contact-form-textArea'></textarea>
            <button className='contact-form-btn'>Send a message</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact;