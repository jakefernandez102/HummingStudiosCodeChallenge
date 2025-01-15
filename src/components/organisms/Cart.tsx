import {CartT} from "../../types/cart"
import Button from "../atoms/Button"
import CartItem from "../molecules/CartItem"

type CartProps ={
  isEmpty:boolean,
  cart:CartT[],
  decreaseQuantity: (id:number)=>void,
  increaseQuantity:(id:number)=>void,
  removeFromCart:(id:number)=>void,
  clearCart:()=>void,
  cartTotal:number,
}

const Cart = ({isEmpty, cart, decreaseQuantity, increaseQuantity, removeFromCart, clearCart, cartTotal}:CartProps) => {
  return (
    <div 
      className="carrito"
    >
      <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
      <div id="carrito" className="bg-white p-3">
          {isEmpty ? (
              <p className="text-center">Cart is empty.</p>
          ) : (
          <>
              <table className="w-100 table">
                  <thead>
                      <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th> - </th>
                      </tr>
                  </thead>
                  <CartItem
                    cart={cart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                  />
              </table>

              <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
          </>
          )}
          <Button
            text='Clear Cart'
            className='btn btn-dark w-100 mt-3 p-2'
            onClick={clearCart}
          />
          {/* <button 
              className="btn btn-dark w-100 mt-3 p-2"
              onClick={()=>clearCart()}
          >Clear Cart</button> */}
      </div>
    </div>
  )
}

export default Cart