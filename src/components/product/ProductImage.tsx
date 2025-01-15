type ProductImageProps = {
  imageToShow:string,
  handlePreviousVariant: ()=>void,
  handleNextVariant: ()=>void
}
const ProductImage = ({imageToShow,handlePreviousVariant,handleNextVariant}:ProductImageProps) => {
  return (
    <div className="col-12 relative">
        <img className="img-fluid" src={imageToShow} alt="imagen product" />
        <div className='carousel-container col-12'>
          <img onClick={handlePreviousVariant} className='less-than-icon' src="/img/less-than.png" alt="less than icon" />
          <img onClick={handleNextVariant} className='greater-than-icon' src="/img/greater-than.png" alt="greater than icon" />
        </div>
    </div>
  )
}

export default ProductImage