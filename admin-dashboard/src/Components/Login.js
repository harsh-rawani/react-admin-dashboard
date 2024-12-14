import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(()=>{
    return  localStorage.getItem('token')
  })
  const onSuccess = (credentialResponse)=>{

      localStorage.setItem('token',credentialResponse.credential)
      const isUser = localStorage.getItem('token')
      console.log(isUser);
      setToken(isUser)
      if(isUser){
        console.log('user logged In');
      }
      console.log(credentialResponse,"success fully logged in")
    navigate('/dashboard')
  }

  return(
    <GoogleLogin
    onSuccess={onSuccess}
    onError={() => {
      console.log('Login Failed')
    }}/>
  )
}

export default Login
