import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';


function Nav(props) {
  return (
    <nav className='header'>
      <Link className='logoText' to={`/`}>Game Posters</Link>
      <Link to={`/`}>Home</Link>
      <Link to={`/shop`}>Shop</Link>
      <Link className='cart-logo-counter' to={`/cart`}><img className='cartIcon' src={cart} alt='cart icon'/>10</Link>
    </nav>
  ) 
}

export default Nav;
