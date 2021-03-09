import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="row block center">
      <div>
       <Link to='/'>
         <h1>Product</h1>
       </Link>
      </div>
      <div>
        <Link to='/cart'>
          <h1>Cart </h1> 
        </Link>
      </div>
    </header>
  );
}

export default Navbar;