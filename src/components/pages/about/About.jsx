import React from 'react'
import Navbar from '../../navbar/Navbar';
import Maps from '../../../images/map.png';
import KwakolCommunity from '../../../images/kwakol-community.png';
import Star from '../../../images/star.png';
import Yakubu from '../../../images/yakubu.png';
import Joseph from '../../../images/joseph.png';
import Bashir from '../../../images/bashir.png';
import Titilayo from '../../../images/titilayo.png';
import Reviews from '../home/Reviews';
import Footer from '../home/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <section className='vision'>
          <section className='map-img'>
            <img src={Maps} alt='map' />
          </section>
          <section>
            <p className='vision-title'>OUR VISION</p>
            <p className='vision-statement'>
              To provide the best <br/>
              trading experience and <br/>
              the best market pricing <br/>
              and execution to traders <br/>
              globally.
            </p>
          </section>
        </section>
        <section className='about-us'>
          <img src={KwakolCommunity} alt='people-of-kwakol' className='about-us-img'/>
          <section className='about-us-text-section'>
            <h3 className='about-us-text-section-h3'>About Us</h3>
            <p className='about-us-text-section-text'>
              At Kwakol Academy, our goal is to serve as a <br/>
              platform that provides easy-to-understand <br/>
              educational courses and content to people <br/>
              interested in learning forex trading, investment, <br/>
              and financial literacy. We aim to educate you on <br/>
              how to leverage the digital economy to create <br/>
              the future you want and deserve.
            </p>
          </section>
        </section>
        <section>
          <p className='services-title'>Services</p>
          <section className='services-section'>
            <section className='service-section-group'>
              <img src={Star} alt='star' className='services-img'/>
              <p className='service-section-p'>Online Brokage Services</p>
            </section>
            <section className='service-section-group'>
              <img src={Star} alt='star' className='services-img'/>
              <p className='service-section-p'>Kwakol Funds</p>
            </section>
            <section className='service-section-group'>
              <img src={Star} alt='star' className='services-img'/>
              <p className='service-section-p'>Research and Technology</p>
            </section>
          </section>
        </section>
        <Reviews />
        <section className='team'>
          <section className='team-intro'>
            <p className='team-intro-p1'>Meet Our Team Members</p>
            <p className='team-intro-p2'> 
              We are a team of enterprising growth hackers; creative brand and design gurus; <br/>
              astute accounts and people managers; curious and analytic thinkers; quality <br/>
              educators, and; savvy tech bros ♀♂.
            </p>
          </section>
          <section className='team-leads'>
            <section>
              <img src={Yakubu} alt='ceo' className='team-leads-img'/>
              <p className='team-leads-names'>Yakubu Ishaku Teri</p>
              <p className='team-leads-position'>C.E.O/Growth Lead</p>
            </section>
            <section>
              <img src={Joseph} alt='coo' className='team-leads-img'/>
              <p className='team-leads-names'>Joseph Ishaku</p>
              <p className='team-leads-position'>C.O.O/Research Lead</p>
            </section>
            <section>
              <img src={Bashir} alt='academy' className='team-leads-img'/>
              <p className='team-leads-names'>Bashir Saine</p>
              <p className='team-leads-position'>Academy</p>
            </section>
            <section>
              <img src={Titilayo} alt='growth' className='team-leads-img'/>
              <p className='team-leads-names'>Titilayo Akanji</p>
              <p className='team-leads-position'>Growth</p>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About