import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const image = require(`../${props.poster.url}`);
  const id = props.poster.id;

  return (
    <div className="card">
      <Link to={`/shop/${id}`}>
        <img className='card--image' src={image} alt={props.poster.name} />
      </Link>
      <div>{props.poster.name}</div>
      <div className='priceAndBuy'>
        <div className="price">${props.poster.price}</div>
        <div onClick={props.addToCart} className='buy'>Add to cart</div>
      </div>
      
    </div>
  );
}

export default Card;
