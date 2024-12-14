import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')) {
            console.log("fi fires");
            navigate('/')
        }
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard