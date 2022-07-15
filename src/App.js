import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Poster from './pages/Poster';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import initPosters from './posters/initPosters';

function App() {
  const [posters, setPosters] = React.useState(initPosters);

  function addToCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id) {
        poster.quantity += 1;
        poster.inCart = true;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function decreaseInCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id && poster.quantity >= 2) {
        poster.quantity -= 1;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function removeFromCart(id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id) {
        poster.quantity = 0;
        poster.inCart = false;
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function handleValueChange(event, id) {
    const newPosters = posters.map((poster) => {
      if (poster.id === id) {
        if (+event.target.value >= 0) {
          poster.quantity = +event.target.value;
        }
      }
      return poster;
    });
    setPosters(newPosters);
  }

  function emptyTheCart() {
    const newPosters = posters.map((poster) => {
      poster.quantity = 0;
      poster.inCart = false;
      return poster;
    });
    setPosters(newPosters);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav posters={posters} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop posters={posters} addToCart={addToCart} />}
        />
        <Route
          path="/shop/:id"
          element={<Poster posters={posters} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              posters={posters}
              addToCart={addToCart}
              decreaseInCart={decreaseInCart}
              removeFromCart={removeFromCart}
              emptyTheCart={emptyTheCart}
              onValueChange={handleValueChange}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
