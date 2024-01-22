import React from 'react'
import Add from '../images/avatar.png'
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Me</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text"  placeholder='enter your name'/>
                <input type="email" placeholder='enter your email' />
                <input type="password" placeholder='enter your password' />
                <input hidden type="file"  id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add your avatar here</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You have no account Login</p>
        </div>
    </div>
  )
}

export default Register
