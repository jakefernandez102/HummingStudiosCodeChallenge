type InputProps = {
  value: string;
  onChange?: (value: string) => void;
  type: string;
  placeholder?: string;
  className?: string;
};

const Input = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "form-input",
}: InputProps) => {
  return (
    type != 'submit'
    ? <input
      className={className}
      type={type}
      value={value}
      onChange={(e) => {
        if(onChange){
          onChange(e.target.value)
        }
      }}
      placeholder={placeholder}
    />
    : <input
      className={className}
      type={type}
      value={value}
    />
  );
};

export default Input;