import {useState} from "react";
import {Link} from "react-router-dom";
import { ProductT} from "../types/product";
import {useCart} from "../hooks/useCart";
import {ToastContainer} from "react-toastify";
import Button from "./product/Button";
import VariantColors from "./product/VariantColors";
import StockIndicator from "./product/StockIndicator";
import ProductImage from "./product/ProductImage";

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
            <ProductImage
              imageToShow={imageToShow}
              handleNextVariant={handleNextVariant}
              handlePreviousVariant={handlePreviousVariant}
            />

            <VariantColors
              variantColors={variant_colors}
              setImageToShow={setImageToShow}
            />

            <StockIndicator
              stock={product?.stock}
            />
            <Link to={`/products/${id}`}>
              <p className='text-primary fw-bold text-sub'>See details...</p>
            </Link>
            <div className="col-12">
              <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{name}</h3>
              <p className="fw-black text-primary fs-3 text-center">{price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
              <Button
                product={product}
                addToCart={addToCart}
                text={'Add to Cart'}
              />
            </div>
            <ToastContainer/>
        </div>
    )
}
