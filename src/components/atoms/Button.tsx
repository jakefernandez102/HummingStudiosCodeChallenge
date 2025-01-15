import {CartT} from "../../types/cart"

type ButtonProps = {
  text:string,
  data?:CartT,
  onClick?:(data?: CartT | undefined)=>void,
  className?:string
}
const Button = ({text,onClick,data,className}:ButtonProps) => {
  return (
    <button 
        type="button"
        className={className}
        onClick={() => {
          if(onClick && data){
            onClick(data)
          }else if(onClick && !data){
            onClick()
          }
        }}
    >{text}</button>
  )
}

export default Button