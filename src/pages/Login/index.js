import React from 'react'
import googleLogin from '../../img/googleLogin.png'
import '../../styles/loginPage.css'

const Login = () => {
  return (
    <>

        <h3 className='loginPageHead'>Login Page</h3>
        <div>
            <img className='googleLoginBtn' src={googleLogin} alt="" />
        </div>

    </>
  )
}

export default Login;