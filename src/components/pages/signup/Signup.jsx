import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bigLogo from '../../../images/logoNname.png';
import Google from '../../../images/google.png';
import Line from '../../../images/Line.png';
import Footer from '../home/Footer';
import '../login/Login.css';

function Signup() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  }
  return (
    <div>
      <FaArrowLeft onClick={goBack} className='back-arrow' />
      <section className='login-container'>
        <section className='logo-section'>
          <img src={bigLogo} alt='Kwakol logo' className='logo-section-lhs'/>
        </section>
        <section className='login-form-container'>
          <p className='login-intro-text'>Create an Account</p>
          <form className='login-form'>
            <label for='name' className='input-text' required>Name<span>*</span><br/></label>
            <input name='name' type='text' className='input-field'/>
            <label for='email' className='input-text' required>Email Address<span>*</span><br/></label>
            <input name='email' type='email' className='input-field'/>
            <label for='password' className='input-text'required>Password<span>*</span><br/></label>
            <input name='password' type='password' className='input-field'/>
            <button type='submit' className='continueBtn'>Continue</button>
          </form>
          <section className='intersection'>
            <img src={Line} alt='intersection line' className='intersectionImg'/>
            <p className='intersectionText'>Or</p>
            <img src={Line} alt='intersection line' className='intersectionImg'/>
          </section>
          <button className='signUpBtn'>
            <img src={Google} alt='googleIcon'/>
            Sign Up with Google
          </button>
        </section>
      </section>
      <Footer />
    </div>
  ) 
}

export default Signup