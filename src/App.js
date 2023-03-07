import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Members from './components/pages/membership/Members';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/membership' element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
