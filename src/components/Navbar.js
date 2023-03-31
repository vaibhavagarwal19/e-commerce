import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({product}) {
  

  

 

  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img className='navbar-logo' src='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg'/>SHOPCART</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li class="nav-item ">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
        
         
          <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            
          
        </ul><Link to='/cart'><img className='cart-logo' src="https://img.icons8.com/pastel-glyph/64/null/shopping-cart--v1.png"/></Link>
        
      </div>
    </div>
  </nav>
  );
}

export default Navbar;