
"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Login } from './login'
import { Register } from './register'
import { ModeToggle } from './mode-toggle';
import { Dropdownheader } from './dropdownheader'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'


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
    
  };


    
  return (
    <div className="header flex items-center justify-between p-3 ">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu">
        <ul className="ml-64 flex items-center justify-center gap-4">
          <Link href={'/'}><Button variant={"ghost"}>Home</Button></Link>
          <Link href={'/about'}><Button variant={"ghost"}>About</Button></Link>
          <Link href={'/contact'}><Button variant={"ghost"}>Contact</Button></Link>
          
        </ul>
      </div>
      <div className="account items-center  gap-4 flex z-10">
        {login ? 
          <>

          
          <Button className='font-bold ml-4' variant={"ghost"}>  Hello! {username} <Avatar className='ml-2' >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar></Button>
          
          
          
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
