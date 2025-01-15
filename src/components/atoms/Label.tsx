type LabelProps={
  className:string,
  htmlFor:string,
  text:string
}
const Label = ({className, htmlFor,text}:LabelProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>{text}</label>
  )
}

export default Label