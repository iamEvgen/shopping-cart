import React from 'react';
import Card from '../components/Card';

function Shop(props) {
  const cards = props.posters.map((poster) => {
    return (
      <Card
        key={poster.id}
        poster={poster}
        addToCart={() => {
          props.addToCart(poster.id);
        }}
      />
    );
  });

  return (
    <div className="mainPage">
      <div className="shopField">
        <h2>Posters</h2>
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}

export default Shop;
