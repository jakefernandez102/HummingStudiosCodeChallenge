
import Product from '../components/Product'
import Footer from '../components/Footer'
import {useCart} from '../hooks/useCart'
import SubscriptionForm from '../components/SubscriptionForm'


function ProductView() {

  const {data} = useCart()
  return (
    <>
    <main className="container-xl mt-5">
        <h2 className="text-center">Our Product</h2>

        <div className="row mt-5">
            {data.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                />
            ))}
            
        </div>
    </main>
    
    <hr className='my-5' />

    <SubscriptionForm/>

    <Footer/>
    </>
  )
}

export default ProductView
