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
            width={100}
            height={110}
          />
        ))
      }
    </div>
  )
}

export default VariantColors