import {CartT} from "../../types/cart"

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
                  <tbody>
                      {cart.map( (product:CartT) => (
                          <tr key={product.id}>
                              <td>
                                  <img 
                                      className="img-fluid" 
                                      src={`/img/${product.image}.png`}
                                      alt="imagen product" 
                                  />
                              </td>
                              <td>{product.name}</td>
                              <td className="fw-bold">
                                  ${product.price}
                              </td>
                              <td className="flex align-items-start gap-4">
                                  <button
                                      type="button"
                                      className="btn btn-dark"
                                      onClick={() => decreaseQuantity(product.id)}
                                  >
                                      -
                                  </button>
                                      {product.quantity}
                                  <button
                                      type="button"
                                      className="btn btn-dark"
                                      onClick={() => increaseQuantity(product.id)}
                                  >
                                      +
                                  </button>
                              </td>
                              <td>
                                  <button
                                      className="btn btn-danger"
                                      type="button"
                                      onClick={() => removeFromCart(product.id)}
                                  >
                                      X
                                  </button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>

              <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
          </>
          )}

          <button 
              className="btn btn-dark w-100 mt-3 p-2"
              onClick={()=>clearCart()}
          >Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart