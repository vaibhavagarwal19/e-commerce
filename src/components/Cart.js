import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Navbar from "./Navbar";

function Cart1() {
  const [item , setItem] = useState()
  return (
    <>
      <Navbar />
      <header>
        <div className="continue-shopping">
          <img
            className="arrow-icon"
            src="https://img.icons8.com/material-outlined/24/null/less-than.png"
          />
          <h3>continue shopping</h3>
        </div>
        
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        
        <div className="cart-items">
          <div className="cart-items-container">
            {/* {
              item.map((curItem)=>{
                return <Items 
                key={curItem.id} {...curItem}/>
              })
            } */}
           
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart1;
