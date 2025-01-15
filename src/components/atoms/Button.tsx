type ButtonProps<T> = {
  text:string,
  data?:T,
  onClick?:(data?: T)=>void,
  className?:string
}
const Button = <T,>({text,onClick,data,className}:ButtonProps<T>) => {
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