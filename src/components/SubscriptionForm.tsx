import React, {useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
const SubscriptionForm = () => {

  const [email, setEmail] = useState('')


  const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(email.length ===0){
      toast('Email field must not be empty to submit subscription, please add a valid email',{
        type:'error',
        position:'bottom-center'
      })
      return
    }
    toast('Thank you for subscribing',{
      type:'success',
      position:'bottom-center'
    })
  }

  return (
      <section className='col-8 text-center subscription-section'>
        <hr />
        <h3 className='fs-3 text-primary'>If you want to receive update of our new products, subscribe by email below!</h3>
        <form onSubmit={handleSubmitForm} className='subscription-form'>
          <div className='subscription-form-group'>
            <label className='subscription-form-label' htmlFor="email">Email:</label>
            <input 
              className='subscription-form-input' 
              type="email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder='john.doe@gmail.com' 
              />
          </div>
          <input className='subscription-form-submit' type="submit" value='Subscribe' />
        </form>
        <ToastContainer />
      </section>
  )
}

export default SubscriptionForm