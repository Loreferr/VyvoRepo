
"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Login } from './login'
import { Register } from './register'
import { ModeToggle } from './mode-toggle';
import { Dropdownheader } from './dropdownheader'


export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const login = window.localStorage.getItem('isLoggedin')

  const handleLoginSuccess = (username:any) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('username');
    if (storedUserInfo) {
      
      
      setUsername(storedUserInfo);
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedin');
    setUsername('');
    setIsLoggedIn(false);
  };


    
  return (
    <div className="header flex items-center justify-between p-3 ">
      <div className="logo">
        
      </div>
      <div className="menu">
        <ul className="ml-48 flex items-center justify-center gap-4">
          <Button variant={"ghost"}>Home</Button>
          <Button variant={"ghost"}>About</Button>
          <Button variant={"ghost"}>Contact</Button>
        </ul>
      </div>
      <div className="account items-center  gap-4 flex z-10">
        {login ? 
          <>
          
          <Dropdownheader></Dropdownheader>
          <Button variant={"outline"} onClick={handleLogout}>Logout</Button>
          <ModeToggle></ModeToggle>
          
          </>
          :
          <>
          <Login onLoginSuccess={handleLoginSuccess}></Login>
          <Register></Register>
          <ModeToggle></ModeToggle>
          </>
        }
      
          
          
        </div>
      
        
      </div>
      
    
  );
};
