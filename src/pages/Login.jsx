import React from 'react'
import Add from '../images/avatar.png'
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Me</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='enter your email' />
                <input type="password" placeholder='enter your password' />
               
                <button>Sign up</button>
            </form>
            <p>You don't have  account ? Register</p>
        </div>
    </div>
  )
}

export default Login
