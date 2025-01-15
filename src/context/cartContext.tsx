import { createContext, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { ProductT } from "../types/product";
import { db } from "../data/db";
import {CartContextType, CartT} from "../types/cart";
import {toast} from "react-toastify";



export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartT) => {
    const itemExists = cart.findIndex((product: ProductT) => product.id === item.id);
    if(item.stock ===0){
      toast("We're sorry, the product you tried to add to the cart is currently out of stock",{
        position:'top-center',
        type:'error'
      })
      return
    }
    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS){
        toast('You can add only 5 products to the cart',{
          position:'top-center',
          type:'error'
        })
        return
      } 
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
    toast('Product added successfully',{
      position:'top-center',
      type:'success'
    })
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart:CartT[]) => prevCart.filter((product) => product.id !== id));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item:CartT) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item:CartT) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total:number, item:CartT) => total + item.quantity * item.price, 0), [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        data,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

