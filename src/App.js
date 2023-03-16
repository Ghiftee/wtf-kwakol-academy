import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Members from './components/pages/membership/Members';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import { Route, Routes } from 'react-router-dom';
import GetApp from './components/pages/gettheapp/GetApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/membership' element={<Members />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/gettheapp' element={<GetApp />} />
      </Routes>
    </div>
  );
}

export default App;
