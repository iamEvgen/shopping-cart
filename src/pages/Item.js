import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Item(props) {
  const params = useParams();

  let currentPoster;
  props.posters.forEach((poster) => {
    if (poster.id === +params.id) {
      currentPoster = poster;
    }
  });

  const image = require(`../${currentPoster.url}`);

  return (
    <div className="mainPage">
      <div className="mainField">
        <div className="twoColumns">
          <div className="leftColumn">
            <img className="itemImage" src={image} alt={currentPoster.name} />
          </div>
          <div className="rightColumn">
            <div className="addInfo">
              <span className="infoTitle">Game: </span>
              {currentPoster.name}
            </div>
            <div className="addInfo">
              <span className="infoTitle">Description: </span>
              {currentPoster.description}
            </div>
            <div className="addInfo">
              <span className="infoTitle">Poster price: </span>
              {'$' + currentPoster.price}
            </div>
            <div className="item--3btns">
              <div
                onClick={() => {
                  props.addToCart(currentPoster.id);
                }}
                className="buyPoster"
              >
                Add poster to cart
              </div>
              <div className="item--2btns">
                <Link className="backBtn" to="/shop">
                  {'<-- Go back'}
                </Link>
                <Link className="cartBtn" to="/cart">
                  {'Go cart -->'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
