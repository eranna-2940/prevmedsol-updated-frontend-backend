import React, { useState } from 'react';

function Cart() {

  return (
    <div>
      <nav>
        <button onClick={() => setIsCartVisible(true)}>Cart</button>
      </nav>
      <div>
        <div className="card">
          <h3>Plan 1</h3>
          <p>Amount: $10</p>
          <button onClick={() => addToCart(plans[0])}>Add to Cart</button>
        </div>
        <div className="card">
          <h3>Plan 2</h3>
          <p>Amount: $20</p>
          <button onClick={() => addToCart(plans[1])}>Add to Cart</button>
        </div>
        <div className="card">
          <h3>Plan 3</h3>
          <p>Amount: $30</p>
          <button onClick={() => addToCart(plans[2])}>Add to Cart</button>
        </div>
      </div>
      {isCartVisible && (
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.planName} - ${item.amount}</li>
            ))}
          </ul>
          <p>
            Total Amount: ${cartItems.reduce((total, item) => total + item.amount, 0)}
          </p>
          <button onClick={() => setIsCartVisible(false)}>Close Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
