import {handleChangeImage} from "../../utils/change-image"

type VariantColorsProps ={
  variantColors:string[],
  setImageToShow: React.Dispatch<string>
}
  const VariantColors = ({variantColors,setImageToShow}:VariantColorsProps) => {
  return (
    <div>
      {
        variantColors?.map(img =>(
          <img 
            key={img} 
            className="variant_color" 
            src={`/img/${img}.png`} 
            alt='images' 
            onMouseOver={(e)=>handleChangeImage(e,setImageToShow)}
          />
        ))
      }
    </div>
  )
}

export default VariantColors