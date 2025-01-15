import {ReactNode} from "react"

type FormProps = {
  className:string,
  onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
  children: ReactNode
}
const Form = ({className, onSubmit,children}:FormProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}

export default Form