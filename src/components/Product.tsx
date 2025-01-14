import {useState} from "react";
import {Link} from "react-router-dom";
import { ProductT} from "../types/product";
import {handleChangeImage} from "../utils/change-image";
import {useCart} from "../hooks/useCart";

export type ProductProps ={
  product:ProductT
}

export default function Product({product}: ProductProps) {

  const [imageToShow, setImageToShow] = useState(`/img/${product?.variant_colors[0]}.png`)
  const [variantImages] = useState(product?.variant_colors)

  const { id, name, price,variant_colors } = product
  
  const {addToCart} = useCart();
  
  const handleNextVariant= ()=>{
    const imageIdx = variantImages.indexOf(imageToShow.split('/')[2].split('.')[0])

    if(imageIdx < variantImages.length-1){
      setImageToShow(`/img/${variantImages[imageIdx+1]}.png`)
    }else{
      setImageToShow(`/img/${variantImages[0]}.png`)
    }
  } 
  const handlePreviousVariant= ()=>{
    const imageIdx = variantImages.indexOf(imageToShow.split('/')[2].split('.')[0])

    if(imageIdx === 0){
      setImageToShow(`/img/${variantImages[variantImages.length-1]}.png`)
    }else{
      setImageToShow(`/img/${variantImages[imageIdx-1]}.png`)
    }
  }

  return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-12 relative">
                <img className="img-fluid" src={imageToShow} alt="imagen product" />
                <div className='carousel-container col-12'>
                  <img onClick={handlePreviousVariant} className='less-than-icon' src="/img/less-than.png" alt="less than icon" />
                  <img onClick={handleNextVariant} className='greater-than-icon' src="/img/greater-than.png" alt="greater than icon" />
                </div>
            </div>
              <div>
                {
                  variant_colors.map(img =>(
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
              <div>
                {product?.stock > 0 
                ? (
                <div className='d-flex gap-4 fs-5'>
                  <p className='text-success fw-black blink'>o In stock</p>
                </div>
                )
                : (
                <div className='d-flex gap-4 fs-5'>
                  <p className='text-danger fw-black blink'>- Out of stock</p>
                </div>
                )
              }
              </div>
              <Link to={`/products/${id}`}>
                <p className='text-primary fw-bold text-sub'>See details...</p>
              </Link>
            <div className="col-12">
                <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{name}</h3>
                <p className="fw-black text-primary fs-3 text-center">{price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart({...product, quantity:1})}
                >Add to Cart</button>
            </div>
        </div>
    )
}
