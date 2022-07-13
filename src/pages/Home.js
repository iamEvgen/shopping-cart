import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='homeText'>
        <div>Love gaming?</div>
        <div>Get a unique poster of your favorite game right now!</div>
      </div>
      <Link className='startShopping' to={`/shop`}>Start shopping</Link>
    </div>
  )
}

export default Home;
