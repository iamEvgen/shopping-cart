import React from 'react';
import PostersInCart from '../components/PosterInCart';

function Cart(props) {
  const showInCart = props.posters.filter((poster) => {
    if (poster.inCart) {
      return true;
    }
    return false;
  });

  const renderThisPosters = showInCart.map((poster) => {
    return (
      <PostersInCart
        key={poster.id}
        poster={poster}
        addToCart={() => {
          props.addToCart(poster.id);
        }}
        decreaseInCart={() => {
          props.decreaseInCart(poster.id);
        }}
        removeFromCart={() => {
          props.removeFromCart(poster.id);
        }}
        onValueChange={(event) => {
          props.onValueChange(event, poster.id);
        }}
      />
    );
  });

  const total = showInCart.reduce((sum, current) => {
    const price = Math.round(+current.price.split(',').join('.') * 100);
    return sum + price * current.quantity;
  }, 0);

  const totalToString = (total / 100).toString().replace('.', ',');
  const totalResult = (totalToString.includes(',') && totalToString.split(',')[1].length === 1) ?
    totalToString + '0' : totalToString;

  function placeOrderNow() {
    if (showInCart.length > 0) {
      alert('Thank you for placing an order in our fake store!')
    } else {
      alert('Need to add posters to the cart.')
    }
    props.emptyTheCart();
  }
  
  return (
    <div className="mainPage">
      <div className="mainField">
        <h2>Posters in Cart</h2>
        {renderThisPosters}
        <div className="total">Total: ${totalResult}</div>
        <div onClick={placeOrderNow} className="placeOrder">Place order</div>
      </div>
    </div>
  );
}

export default Cart;
