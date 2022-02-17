import React from 'react'

export default function Basket({cartItems, onRemove, onAdd}) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 200 ? 0: 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  return (
    <aside >
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
      </div>
      {cartItems.map((item)=>(
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
          <button onClick={() => onRemove(item)} className="remove"> - </button>
          {' '}
              <button onClick={() => onAdd(item)} className="add"> + </button>
          </div>
          <div className="col-2 text-right">
            
            {item.qty} x {item.price}

          
            {/* .toFixed(2) */}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div className="total-price">
          <hr></hr>
          <div className="row">
            <div className="col-2"> Item Price</div>
            <div className="cor-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> Tax Price</div>
            <div className="cor-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> Shipping Price</div>
            <div className="cor-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"> Total Price</div>
            <div className="cor-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
        </div>
      )}
    </aside>
  )
}

