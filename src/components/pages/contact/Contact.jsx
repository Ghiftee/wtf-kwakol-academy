import React from 'react';
import Navbar from '../../navbar/Navbar';
import './Contact.css';
import CustomerCare from '../../../images/contact-person.png';
import Footer from '../home/Footer';

function Contact() {
  return (
    <>
    <div className='kwakol-contact'>
      <Navbar/>
      <div className='contact-page'>
        <p className='contact-page-title'>Contact Us</p>
        <img src={CustomerCare} alt='customer care personnel' className='contact-img'/>
        <section className='contacts-section'>
          <section>
            <p className='address-heading'>Address</p>
            <p className='address-text'>
              1st floor, Mall 169, Adetokunbo<br/> 
              Ademola Crescent, Wuse II,<br/>
              Abuja, Nigeria
            </p>
          </section>
          <section>
            <p className='contact-heading'>Contact</p>
            <p className='contact-details'>
              Mobile: 08023399491
            </p>
          </section>
          <section>
            <p className='operations'>Hour Operation</p>
            <p className='operations-hour'>
              Monday-Friday;<br/>
              09:00-17:00
            </p>
          </section>
        </section>
        <p className='intersection'>
          If you have any questions about our services, would like to request a <br/>
          brochure or request a call back please use the form and we will get back to <br/>
          you as soon as possible.
        </p>
        <form className='contact-form'>
          <div className='form-first-section'>
            <div className='input-section'>
              <label for='name' className='contact-form-top-label'>Name*</label>
              <input type='text' className='contact-form-input'/>
            </div>
            <div className='input-section'>
              <label for='email' className='contact-form-top-label'>Email*</label>
              <input type='email' className='contact-form-input'/>
            </div>
          </div>
          <div className='form-second-section'>
            <label for='subject' className='contact-form-bottom-label'>Subject*</label>
            <input type='text' className='contact-form-subject-input'/>
            <label for='msg' className='contact-form-bottom-label'>Message*</label>
            <textarea name='msg' className='contact-form-textArea'></textarea>
          </div>
          <button className='contact-form-btn'>Send</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact;

