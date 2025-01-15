type StockIndicatorProps = {
  stock:number
}
const StockIndicator = ({stock}:StockIndicatorProps) => {
  return (
    <div>
      {stock > 0 
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
  )
}

export default StockIndicator