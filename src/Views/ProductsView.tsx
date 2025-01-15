
import Product from '../components/organisms/Product'
import Footer from '../components/Footer'
import {useCart} from '../hooks/useCart'
import SubscriptionForm from '../components/molecules/SubscriptionForm'
import {ToastContainer} from 'react-toastify'
import {ProductT} from '../types/product'


function ProductView() {

  const {data} = useCart()
  return (
    <>
    <main className="container-xl mt-5">
        <h2 className="text-center">Our Product</h2>

        <div className="row mt-5">
            {data.map((product:ProductT) => (
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
    <ToastContainer/>
    </>
  )
}

export default ProductView
