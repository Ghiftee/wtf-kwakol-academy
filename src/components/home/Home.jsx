import React from 'react';
import Kwakol from '../../images/header-img.png';
import './Home.css'

function Home() {
  return (
    <div className='hero-section' id='home'>
      <div className='hero-section-lhs'>
        <h1>
          Learn How To Trade <br />
          <span className='gold-word'>Forex</span> With Kwakol<br />
          Academy
        </h1>
        <p>
          Become a profitable trader with <br /> 
          our comprehensive forex trading <br /> 
          courses, for all levels.
        </p>
        <button>Enroll Now</button>
      </div>
      <div>
        <img src={Kwakol} alt='kwakol-people' className='hero-section-img'/>
      </div>
    </div>

  )
}

export default Home