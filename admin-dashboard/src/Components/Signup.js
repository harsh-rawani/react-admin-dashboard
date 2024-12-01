import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {
  const [UserDetails, setUserDetails] = useState(
    {
      "name":"",
      "username":"",
      "email":"",
      "password":""}
  );
 const handleChange = (e)=>{
    const {name, value} = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }))
 }
 const submitData = (e) =>{
  e.preventDefault();
  console.log(UserDetails)
  axios.post('http://localhost:8000/users',UserDetails)
 }
  return (
    <div>
        <form onSubmit={submitData}>
          <label>Name</label>
          <input type='text' name='name' value={UserDetails.name} onChange={handleChange} className='form-control'/>
          <label>User Name</label>
          <input type='text' name='username' value={UserDetails.username} onChange={handleChange} className='form-control'/>
          <label>Email Address</label>
          <input type='email' name='email' value={UserDetails.email} onChange={handleChange} className='form-control'/>
          <label>Password</label>
          <input type='password' name='password' value={UserDetails.password} onChange={handleChange} className='form-control'/>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Signup