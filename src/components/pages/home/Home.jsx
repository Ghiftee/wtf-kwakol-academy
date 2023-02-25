import Kwakol from '../../../images/header-img.png';
import './Home.css'
import Navbar from '../../navbar/Navbar';
import Study from './Study';
import Start from './Start';
import Reviews from './Reviews';
import Footer from './Footer';

function Home() {
  return (
    <div id='home'>
      <Navbar />
      <div className='hero-section'>
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
      <Study />
      <Start />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home;
