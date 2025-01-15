import {CartT} from "../../types/cart"

type CartItemProps ={
  cart:CartT[],
  decreaseQuantity: (id:number)=>void,
  increaseQuantity:(id:number)=>void,
  removeFromCart:(id:number)=>void,
}
const CartItem = ({cart, decreaseQuantity, increaseQuantity, removeFromCart}:CartItemProps) => {
  return (
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
  )
}

export default CartItem