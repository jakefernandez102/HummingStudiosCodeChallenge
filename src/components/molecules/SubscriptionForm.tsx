import React, {useState} from 'react'
import {toast} from 'react-toastify'
import Label from '../atoms/Label'
import Input from '../atoms/Input'
import FormGroup from './FormGroup'
import Form from './Form'
const SubscriptionForm = () => {

  const [email, setEmail] = useState('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(email.length ===0 || !emailRegex.test(email)){
      toast('Email field must not be empty and must be a valid format email to submit subscription, please add a valid email',{
        type:'error',
        position:'bottom-center'
      })
      return
    }
    toast('Thank you for subscribing',{
      type:'success',
      position:'bottom-center'
    })

    setEmail('')
  }

  return (
      <section className='col-8 text-center subscription-section'>
        <h3 className='fs-3 text-primary'>If you want to receive update of our new products, subscribe by email below!</h3>
        <Form className='subscription-form' onSubmit={handleSubmitForm}>
          <FormGroup>
            <Label className={'subscription-form-label'} htmlFor={'email'} text={'Email:'}/>
            <Input
              className='subscription-form-input'
              type='email'
              value={email}
              onChange={setEmail}
              placeholder='john.doe@gmail.com'
            />
          </FormGroup>
          <Input
            className='subscription-form-submit'
            type='submit'
            value={'Subscribe'}
          />
        </Form>
      </section>
  )
}

export default SubscriptionForm