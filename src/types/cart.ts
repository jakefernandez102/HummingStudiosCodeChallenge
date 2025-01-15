import {ProductT} from "./product";

export type CartT = ProductT & {
  quantity:number
}

export type CartContextType = {
  cart: CartT[];
  data: ProductT[];
  addToCart: (data: CartT) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};