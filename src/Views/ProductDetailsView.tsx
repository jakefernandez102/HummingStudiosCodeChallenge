import {useEffect, useState} from 'react'
import ProductDetail from '../components/ProductDetail'
import {useCart} from '../hooks/useCart'
import {useParams} from 'react-router-dom'
import Footer from '../components/Footer'
import {ProductT} from '../types/product'

const ProductDetailsView = () => {
  const [product, setProduct] = useState<ProductT>()
  const [imageToShow, setImageToShow] = useState('/img/NIKEDUNK_Black.png')
  const [imageGalery, setImageGalery] = useState<string[]>([])

  const {data} = useCart()

  const params = useParams()

  useEffect(()=>{
    const currentProduct = data.filter((_product: ProductT) => _product.id === parseInt(params.id!))
    if(currentProduct){
      setProduct(currentProduct[0])
      setImageToShow(`/img/${currentProduct[0].variant_colors[0]}.png`)
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
      <ProductDetail
        imageToShow={imageToShow}
        product={product!}
        setImageToShow={setImageToShow}
        imageGalery={imageGalery}
      />
    </div>

    <Footer/>
    </>
  )
}

export default ProductDetailsView