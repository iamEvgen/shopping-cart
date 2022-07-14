import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';

function Nav(props) {
  let inCart = 0;
  props.posters.forEach((poster) => {
    inCart += poster.quantity;
  });

  return (
    <nav className="header">
      <Link className="logoText" to={`/`}>
        Game Posters
      </Link>
      <Link to={`/`}>Home</Link>
      <Link to={`/shop`}>Shop</Link>
      <Link className="cart-logo-counter" to={`/cart`}>
        <img className="cartIcon" src={cart} alt="cart icon" />
        {inCart}
      </Link>
    </nav>
  );
}

export default Nav;
