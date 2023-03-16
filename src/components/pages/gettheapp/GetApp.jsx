import Navbar from '../../navbar/Navbar';
import Footer from '../../pages/home/Footer';
import Phone from '../../../images/phone.png';
import GooglePlay from '../../../images/GooglePlayLogo.png';
import AppStore from '../../../images/AppStoreLogo.png';
import './GetApp.css';

function GetApp() {
  return (
    <>
      <div className='get-app'> 
        <Navbar />
        <div className='app-info-section'>
          <img src={Phone} alt='telephone' className='app-phone-view' />
          <section className='get-started-section'>
            <p className='get-started-p'>Get Started Now</p>
            <p className='get-started-info'>
              Kwakol Academy makes trading receptive for<br />
              both in-experienced users and experts.<br />
              Download the app
            </p>
            <section className='download-section'>
              <section className='google-play-section'>
                <img src={GooglePlay} alt='google play logo' />
                <section>
                  <p className='download-p'>Download on</p>
                  <p className='download-location'>Google Play</p>
                </section>
              </section>
              <section className='google-play-section'>
                <img src={AppStore} alt='app store logo' />
                <section>
                  <p className='download-p'>Download on</p>
                  <p className='download-location'>App store</p>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GetApp