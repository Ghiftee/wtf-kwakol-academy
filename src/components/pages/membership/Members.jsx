import React from 'react';
import Navbar from '../../navbar/Navbar';
import Check from '../../../images/check.png';
import './Members.css';

function Members() {
  const shadows = [
    {boxShadow: '4px 4px 6px #006FD5'},
    {boxShadow: '4px 4px 6px #0C561C'},
    {boxShadow: '4px 4px 6px #BA1717'}
  ]
  return (
    <div>
      <div className='membership-page'>
        <Navbar backgroundColor='#c2eecc' padding='10px 0'/>
        <section className='plans-heading'>
          <p className='plans-text'>Choose the plan that works for you</p>   
        </section>
        <section className='plans-options'>
          {/*Would be refactored*/}
          {/*Free plans*/}
          <section className='plans-boxes' style={shadows[0]}>
            <section className='plans-heading-group'>
              <p className='plans-type'>Free</p>
              <p className='plans-prices'> 0 $</p> 
              <button className='sign-up'>Sign Up</button>
            </section>
            <section className='plans-description-container'>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Access to free resources</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Access to free ebooks</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Access to free classes</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Access to free videos</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Join our Telegram community</p>
              </section>
            </section>
          </section>
          {/*Beginner*/}
          <section className='plans-boxes' style={shadows[1]}>
            <section className='plans-heading-group'>
              <p className='plans-type'>Beginner</p>
              <p className='plans-prices'>10 $</p>
              <button className='upgrade-btn'>Upgrade</button>
            </section>
            <section className='plans-description-container'>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>History of Forex</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Forex Terminologies</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>How to effectively use trading time zones</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Currency's tendencies</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Types of trading techniques analysis</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Using your chatting software</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Introduction to candles sticks</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Kwakol market mesh</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>One on one Coaching</p>
              </section>
            </section>
          </section>
          {/*Advanced*/}
          <section className='plans-boxes' style={shadows[2]}>
            <section className='plans-heading-group'>
              <p className='plans-type'>Advanced</p>
              <p className='plans-prices'>330 $</p>
              <button className='upgrade-btn'>Upgrade</button>
            </section>
            <section className='plans-description-container'>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Trend and structure</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Advanced price Action Trading</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Strategic Session</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Candle stick patterns</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Advanced order type</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Advanced Charting techniques</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Professional trading</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>Kwakol market mesh</p>
              </section>
              <section className='plans-description-individual-container'>
                <img src={Check} alt='checkbox' className='plans-description-img'/>
                <p className='plans-description'>One on one Coaching</p>
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Members