import React, { useState } from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { GoogleLogin } from '@react-oauth/google';
import {  Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  
    return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
      </Routes>
    )
  }



export default App;
