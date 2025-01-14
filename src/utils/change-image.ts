export const handleChangeImage= (e:React.SyntheticEvent<HTMLElement>,setImageToShow:React.Dispatch<string>)=>{
    const target = e.target as HTMLElement; 
    const value = target.getAttribute('src'); 
    if (value) {
      setImageToShow(value);
    }
  }