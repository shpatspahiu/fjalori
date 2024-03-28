import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = ({ setUserState }) => {
  const [formErrors, setFormErrors] = useState({})
  // eslint-disable-next-line
  const [isSubmit, setIsSubmit] = useState(false)
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const changeHandler = e => {
    const { name, value } = e.target
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const validateForm = values => {
    const error = {}
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      error.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      error.email = 'Please enter a valid email address'
    }
    if (!values.password) {
      error.password = 'Password is required'
    }
    return error
  }

  const loginHandler = e => {
    e.preventDefault()
    setFormErrors(validateForm(userCredentials))

    setIsSubmit(true)
    // if (!formErrors) {

    // }
  }

  return (
    <div className='login'>
      <form>
        <h1>Kyçu</h1>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          onChange={changeHandler}
          value={userCredentials.email}
        />
        <p className='error'>{formErrors.email}</p>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          onChange={changeHandler}
          value={userCredentials.password}
        />
        <p className='error'>{formErrors.password}</p>
        <button className='button_common' onClick={loginHandler}>
          Vazhdo
        </button>
      </form>
      <div className='goRegister'>
        Që s'je i regjistrum, &nbsp;
        <Link to='/register'>
          <span>regjistrohu qëtu.</span>
        </Link>
      </div>
    </div>
  )
}
export default Login
