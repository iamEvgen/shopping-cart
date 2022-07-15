import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const [addToCardBtnPressed, setAddToCardBtnPressed] = React.useState(false);

  const image = require(`../${props.poster.url}`);
  const id = props.poster.id;

  function handlePressBtn(event) {
    if (event.type === 'mousedown') {
      setAddToCardBtnPressed(true);
    } else {
      setAddToCardBtnPressed(false);
    }
  }

  const addToCardBtnStyle = addToCardBtnPressed
    ? { backgroundColor: '#f5bf2b' }
    : {};

  return (
    <div className="card">
      <Link to={`/shop/${id}`}>
        <img className="card--image" src={image} alt={props.poster.name} />
      </Link>
      <div>{props.poster.name}</div>
      <div className="priceAndBuy">
        <div className="price">${props.poster.price}</div>
        <div
          style={addToCardBtnStyle}
          onClick={props.addToCart}
          onMouseDown={handlePressBtn}
          onMouseUp={handlePressBtn}
          onMouseLeave={handlePressBtn}
          className="buy"
        >
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default Card;
