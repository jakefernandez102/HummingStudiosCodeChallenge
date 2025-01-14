import {useParams} from "react-router-dom"
import { useEffect, useState} from "react"
import { ProductT} from "../types/product"
import {handleChangeImage} from "../utils/change-image"
import Footer from "./Footer"
import {useCart} from "../hooks/useCart"
import ReactImageMagnify from 'react-image-magnify';

const ProductDetail = () => {

  const [product, setProduct] = useState<ProductT>()
  const [imageToShow, setImageToShow] = useState('/img/NIKEDUNK_Black.png')
  const [imageGalery, setImageGalery] = useState<string[]>([])

  const {addToCart,data} = useCart()

  const params = useParams()

  useEffect(()=>{
    const currentProduct = data.filter((_product: ProductT) => _product.id === parseInt(params.id!))
    
    if(currentProduct){
      setProduct(currentProduct[0])
    }
  },[])

  useEffect(() => {
    const imagesOfProduct = product?.image_galery
      .map((color) => {
        if (imageToShow.includes('Black')) return color['black'];
        if (imageToShow.includes('Light')) return color['light'];
        return color['brown'];
      })
      .filter(Boolean)
      .flat();
    if (imagesOfProduct?.length) {
      setImageGalery(imagesOfProduct);
    }
  }, [imageToShow, product]);


  return (
    <>
    <div className="col-12 my-4 mx-4 row align-items-center">
      <div className="col-4">
          <div
            className="magnifier-image"
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: true,
                  src: imageToShow,
                },
                largeImage: {
                  src: imageToShow,
                  width: 1200,
                  height: 1200,
                },
              }}
            />
          </div>
          <div className='col-12'>
            {
              product?.variant_colors.map(img =>(
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
      </div>
      <div className='col-4'>
            {
              imageGalery.map(image => (
                <img 
                  className="variant_color row" 
                  src={`/img/${image}.png`} 
                  alt="product galery image"
                  onMouseOver={() => setImageToShow(`/img/${image}.png`)}
                />
              ))
            }
      </div>
      <div className="col-4">
          <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{product?.name}</h3>
          <p className="fs-5 ">{product?.description}</p>
          <p className="fw-black text-primary fs-3 text-center">{product?.price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
          <button 
              type="button"
              className="btn btn-dark w-100"
              onClick={() => addToCart({ ...product!, quantity: 1 })}
          >Add to Cart</button>
      </div>
    </div>

        <Footer/>
    </>
  )
}

export default ProductDetail