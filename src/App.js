import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import All from './components/All';
import BrandPage from './components/BrandPage';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  //  localStorage 저장
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //  장바구니 추가
  const addToCart = (item) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id);

      if (exist) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, count: p.count + 1 }
            : p
        );
      }

      return [...prev, { ...item, count: 1 }];
    });
  };

  //  삭제
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  //  수량 변경
  const updateCount = (id, type) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          if (type === 'plus') return { ...item, count: item.count + 1 };
          if (type === 'minus' && item.count > 1)
            return { ...item, count: item.count - 1 };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">

      {/* 헤더 */}
      <header className='header'>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/logo.jpeg"} alt="로고" />
        </div>

        <nav className='gnb'>
          <NavLink className='gnb_list' to='/'>ALL</NavLink>
          <NavLink className='gnb_list' to='/brand/nike'>Nike</NavLink>
          <NavLink className='gnb_list' to='/brand/adidas'>Adidas</NavLink>
          <NavLink className='gnb_list' to='/brand/star'>Star</NavLink>
          <NavLink className='gnb_list' to='/cart'>
            Cart ({cart.length})
          </NavLink>
        </nav>
      </header>

      <hr />

      {/*  메인 */}
      <main className='wrap'>
        <Routes>
          <Route path='/' element={<All addToCart={addToCart} />} />
          <Route path='/brand/:brand' element={<BrandPage addToCart={addToCart} />} />
          <Route path='/detail/:id' element={<Detail addToCart={addToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateCount={updateCount}
              />
            }
          />
        </Routes>
      </main>

      <hr />

      {/*  푸터 */}
      <Footer />

    </div>
  );
}

export default App;