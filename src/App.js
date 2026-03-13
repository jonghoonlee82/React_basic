import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom'

import All from './pages/All'
import Nike from './pages/Nike';
import Adidas from './pages/Adidas';
import Star from './pages/Star';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <div><img src="/images/logo.jpeg" alt="로고" /></div>
        
        <nav className='gnb'>
          <NavLink className='gnb_list' to='/'>ALL</NavLink>
          <NavLink className='gnb_list' to='/nike'>Nike</NavLink>
          <NavLink className='gnb_list' to='/adidas'>Adidas</NavLink>
          <NavLink className='gnb_list' to='/star'>Star</NavLink>
        </nav>
      </header>
      <hr />
      <main className='wrap'>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/nike' element={<Nike />} />
        <Route path='/adidas' element={<Adidas />} />
        <Route path='/star' element={<Star />} />
      </Routes>

      </main>
      <hr />
      <Footer />

    </div>
  );
}

export default App;
