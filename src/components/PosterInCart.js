import React from 'react';
import { Link } from 'react-router-dom';

function PosterInCart(props) {
  const [pressBtns, setPressBtns] = React.useState({
    decrease: false,
    increase: false,
    remove: false,
  });

  const image = require(`../${props.poster.url}`);

  function handlePressBtn(event, btn) {
    if (event.type === 'mousedown') {
      setPressBtns({
        ...pressBtns,
        [btn]: true,
      });
    } else {
      setPressBtns({
        ...pressBtns,
        [btn]: false,
      });
    }
  }

  const styleIncreaseBtn = pressBtns.increase
    ? { backgroundColor: '#c5bfb5' }
    : {};

  const styleDecreaseBtn = pressBtns.decrease
    ? { backgroundColor: '#c5bfb5' }
    : {};

  const styleRemoveBtn = pressBtns.remove ? { backgroundColor: '#c5bfb5' } : {};

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
      <div
        style={styleDecreaseBtn}
        onClick={props.decreaseInCart}
        onMouseDown={(event) => handlePressBtn(event, 'decrease')}
        onMouseUp={(event) => handlePressBtn(event, 'decrease')}
        onMouseLeave={(event) => handlePressBtn(event, 'decrease')}
        className="posterInCart-decrease"
      >
        -
      </div>
      <input
        type="number"
        className="posterInCart-value"
        value={props.poster.quantity}
        name="value"
        onChange={props.onValueChange}
      />
      <div
        style={styleIncreaseBtn}
        onClick={props.addToCart}
        onMouseDown={(event) => handlePressBtn(event, 'increase')}
        onMouseUp={(event) => handlePressBtn(event, 'increase')}
        onMouseLeave={(event) => handlePressBtn(event, 'increase')}
        className="posterInCart-increase"
      >
        +
      </div>
      <div
        style={styleRemoveBtn}
        onClick={props.removeFromCart}
        onMouseDown={(event) => handlePressBtn(event, 'remove')}
        onMouseUp={(event) => handlePressBtn(event, 'remove')}
        onMouseLeave={(event) => handlePressBtn(event, 'remove')}
        className="posterInCart-remove"
      >
        x
      </div>
      <div className="posterInCart-price">${props.poster.price}</div>
    </div>
  );
}

export default PosterInCart;
