import ReactImageMagnify from 'react-image-magnify';

import {ToastContainer} from "react-toastify";
import {ProductT} from '../../types/product';
import {useCart} from '../../hooks/useCart';
import VariantColors from '../molecules/VariantColors';
import Button from '../atoms/Button';

type ProductDetailProps ={
  imageToShow:string,
  product:ProductT,
  setImageToShow:React.Dispatch<string>,
  imageGalery:string[]
}

const ProductDetail = ({imageToShow, product, setImageToShow, imageGalery}:ProductDetailProps) => {
  const {addToCart} = useCart()
  return (
    <>
      <div className="col-8 col-lg-4">
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
          <VariantColors
            variantColors={product?.variant_colors}
            setImageToShow={setImageToShow}
          />
      </div>
      <div className='col-4 col-lg-4'>
            {
              imageGalery.map((image:string) => (
                <img
                  key={image} 
                  className="variant_color row " 
                  src={`/img/${image}.png`} 
                  alt="product galery image"
                  onMouseOver={() => setImageToShow(`/img/${image}.png`)}
                  width={105}
                  height={105}
                />
              ))
            }
      </div>
      <div className=" col-lg-4">
          <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{product?.name}</h3>
          <p className="fs-5 ">{product?.description}</p>
          <p className="fw-black text-primary fs-3 text-center">{product?.price.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
          <Button
            data={{...product,quantity:1}}
            onClick={() => addToCart({...product,quantity:1})}
            text={'Add to Cart'}
            className={'btn btn-dark w-100'}
          />
      </div>
      <ToastContainer/>
    </>
  )
}

export default ProductDetail