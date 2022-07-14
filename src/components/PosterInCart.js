import React from 'react';
import { Link } from 'react-router-dom';

function PosterInCart(props) {
  const image = require(`../${props.poster.url}`);

  return (
    <div className="posterInCart">
      <Link className="posterInCart--link" to={`/shop/${props.poster.id}`}>
        <img
          className="posterInCart--image"
          src={image}
          alt={props.poster.name}
        />
      </Link>
      <div className="posterInCart--name">{props.poster.name}</div>
      <div onClick={props.decreaseInCart} className="posterInCart-decrease">
        -
      </div>
      <input
        type="number"
        className="posterInCart-value"
        value={props.poster.quantity}
        name='value'
        onChange={props.onValueChange}
      />
      <div onClick={props.addToCart} className="posterInCart-increase">+</div>
      <div onClick={props.removeFromCart} className="posterInCart-remove">x</div>
      <div className="posterInCart-price">${props.poster.price}</div>
    </div>
  );
}

export default PosterInCart;
