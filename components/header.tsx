

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Login } from './login'
import { Register } from './register'
import { ModeToggle } from './mode-toggle';

export const Header = () => {

    
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
      
          <Login></Login>
          <Register></Register>
          <ModeToggle></ModeToggle>
        </div>
      
        
      </div>
      
    
  );
};
