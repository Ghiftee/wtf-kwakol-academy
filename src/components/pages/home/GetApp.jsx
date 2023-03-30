import React from 'react';
import iphoneHand from '../../../images/iphone-hand.png';
import ellipse1 from '../../../images/ellipse-1.png';
import ellipse2 from '../../../images/ellipse-2.png';

function GetApp() {
  return (
    <div className='get-app-section'>
      <div className='get-app-inner-section'>
        <div className='get-app-lhs'>
        <h1>Download Our Mobile Application</h1>
        <p>
          You can download our mobile application in playstore or applestore.<br/>
          After that you can create an account in the application
        </p>
      </div>
      <div className='get-app-rhs'>
        <img src={ellipse1} alt='ellipse 1' className='ellipse-1' />
        <img src={ellipse2} alt='ellipse 2' className='ellipse-2' />
        <img src={iphoneHand} alt='iphone hand' className='iphone-hand' />
      </div>
      </div>
    </div>
  )
}

export default GetApp