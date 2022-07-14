import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Item from './pages/Item';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import initPosters from './components/initPosters';

function App() {
  const [posters, setPosters] = React.useState(initPosters);

  function addToCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id) {
        poster.inCart += 1;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function decreaseInCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id && poster.inCart >= 2) {
        poster.inCart -= 1;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function removeFromCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id) {
        poster.inCart = 0;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  return (
    <BrowserRouter>
      <Nav posters={posters} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop posters={posters} addToCart={addToCart} />}
        />
        <Route
          path="/shop/:id"
          element={<Item posters={posters} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              posters={posters}
              addToCart={addToCart}
              decreaseInCart={decreaseInCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
