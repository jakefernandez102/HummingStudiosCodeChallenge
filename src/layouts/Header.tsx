import Title from "../components/atoms/Title";
import Cart from "../components/organisms/Cart";
import {useCart} from "../hooks/useCart";


export default function Header() {
  
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();
    
  return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    
                    <Title textWhite={'Humming'} textYellow={'Store Challenge'} />

                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-center">
                            <Cart
                              isEmpty={isEmpty}
                              cart={cart}
                              decreaseQuantity={decreaseQuantity}
                              increaseQuantity={increaseQuantity}
                              removeFromCart={removeFromCart}
                              clearCart={clearCart}
                              cartTotal={cartTotal}     
                            />
                    </nav>
                </div>
            </div>
        </header>
    )
}
