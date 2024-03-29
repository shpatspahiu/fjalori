import React, { useState } from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formErrors, setFormErrors] = useState({})
  // eslint-disable-next-line
  const [isSubmit, setIsSubmit] = useState(false)
  const [user, setUserDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: ''
  })

  const changeHandler = e => {
    const { name, value } = e.target
    setUserDetails({
      ...user,
      [name]: value
    })
  }

  const validateForm = values => {
    const error = {}
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.fname) {
      error.fname = 'Emri na duhët'
    }
    if (!values.lname) {
      error.lname = 'Mbiemri na duhët'
    }
    if (!values.email) {
      error.email = 'Na duhët email-i'
    } else if (!regex.test(values.email)) {
      error.email = 'Ky email nuk është i formatit valid'
    }
    if (!values.password) {
      error.password = 'Password-i na duhët'
    } else if (values.password.length < 8) {
      error.password = "Password-i duhet t'jetë ma i gjatë se 7 karaktere"
    } else if (values.password.length > 16) {
      error.password = "Password-i mos t'jetë ma i gjatë se 16 karaktere"
    }
    if (!values.cpassword) {
      error.cpassword = 'Konfirmoje password-in'
    } else if (values.cpassword !== values.password) {
      error.cpassword = 'Password-et po dallojnë prej njona-tjetrës! '
    }
    return error
  }
  const signupHandler = e => {
    e.preventDefault()
    setFormErrors(validateForm(user))
    setIsSubmit(true)
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  }

  return (
    <>
      <div className='register'>
        <form>
          <h1>Krijo nji llogari t're</h1>
          <input
            type='text'
            name='fname'
            id='fname'
            placeholder='Emri'
            onChange={changeHandler}
            value={user.fname}
          />
          <p className='error'>{formErrors.fname}</p>
          <input
            type='text'
            name='lname'
            id='lname'
            placeholder='Mbiemri'
            onChange={changeHandler}
            value={user.lname}
          />
          <p className='error'>{formErrors.lname}</p>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={changeHandler}
            value={user.email}
          />
          <p className='error'>{formErrors.email}</p>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={changeHandler}
            value={user.password}
          />
          <p className='error'>{formErrors.password}</p>
          <input
            type='password'
            name='cpassword'
            id='cpassword'
            placeholder='Apet Password-i'
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className='error'>{formErrors.cpassword}</p>
          <button className='button_common' onClick={signupHandler}>
            Regjistrohu
          </button>
        </form>
        <div className='goLogin'>
          Që je i regjistrum,&nbsp;
          <Link to='/login'>kyçu qëtu.</Link>
        </div>
      </div>
    </>
  )
}
export default Register
