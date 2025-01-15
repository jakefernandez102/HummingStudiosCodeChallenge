import {CartT} from "../../types/cart"
import {ProductT} from "../../types/product"

type ButtonProps = {
  text:string,
  addToCart:(product:CartT)=>void,
  product:ProductT
}
const Button = ({text,addToCart,product}:ButtonProps) => {
  return (
    <button 
        type="button"
        className="btn btn-dark w-100"
        onClick={() => addToCart({...product, quantity:1})}
    >{text}</button>
  )
}

export default Button