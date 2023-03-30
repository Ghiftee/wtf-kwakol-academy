import Kwakol from '../../../images/header-img.png';
import './Home.css'
import Navbar from '../../navbar/Navbar';
import Study from './Study';
import PopularCourses from './PopularCourses';
import Reviews from './Reviews';
import GetApp from './GetApp';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className='home-page'>
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
            <button>Get Started</button>
          </div>
          <div>
            <img src={Kwakol} alt='kwakol-people' className='hero-section-img'/>
          </div>
        </div>
        <Study />
        <PopularCourses />
        <Reviews />
        <GetApp />
        <Footer />
      </div>
    </>
  )
}

export default Home;
