import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import bigLogo from '../../../images/logoNname.png';
import Google from '../../../images/google.png';
import Line from '../../../images/Line.png';
import Footer from '../home/Footer';
import './Login.css';

function Login() {
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
          <p className='login-intro-text'>WELCOME</p>
          <form className='login-form'>
            <label for='email' className='input-text' required>Email Address<span>*</span><br/></label>
            <input name='email' type='email' className='input-field'/>
            <label for='password' className='input-text'required>Password<span>*</span><br/></label>
            <input name='password' type='password' className='input-field'/>
            <span className='pwdRecoverySection'>
              <label for='rememberUser' className='remember-checkbox-section'>
                <input name='rememberUser' type='checkbox'/>
                Remember me
              </label>
              <Link to='/recoverPwd' className='pwd-section'>Forgot Password</Link>
            </span>
            <button type='submit' className='signInBtn'>Sign In</button>
          </form>
          <section className='newUserSection'>
            <p className='newUserP'>Not registered yet?</p>
            <Link to='/signUp' className='newUserLink'>Create an account</Link>
          </section>
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

export default Login