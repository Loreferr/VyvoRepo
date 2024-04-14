"use client"

import React, { useState } from 'react';


import {
    Dialog,
    DialogClose,
    DialogContent,
    
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';





export const Login = ({onLoginSuccess, onLoginError}) => {
  const { toast } = useToast()
  const [error, setError] = useState("");
  
  const handleToast = () => {
    if (2 > 1) {
      toast({
        description: "Login has been successful"
      })
    }
  }
  
  

  
  const [formData, setFormData] = useState({
    
    username: '',
    
    password: ''
  });
  

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Previeni il comportamento predefinito del modulo

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
      
       // Leggi la risposta come testo
  
      // Verifica se la risposta contiene un messaggio di conferma
      if (responseData.username && responseData.accessToken) {
        console.log('Login effettuato con successo!', responseData);
        localStorage.setItem('accessToken', responseData.accessToken);
        localStorage.setItem('username', responseData.username);
        localStorage.setItem('isLoggedin', 'true');
        onLoginSuccess(responseData.username);
        
        
        

        setFormData({
          
          username: '',
          
          password: ''
        });
        // Puoi fare ulteriori azioni qui, se necessario
      } else {
        // Altrimenti, la risposta non è come previsto
        console.error('La risposta dall\'API non è come previsto:', responseData);
        setError('Credenziali non valide. Si prega di riprovare.');
        onLoginError()
      }
  
    } catch (error) {
      
      console.error('Errore durante la registrazione:', error);
    }
  };



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className='text-6x1 font-bold'>Login</h2>
      <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Visualizza l'errore se presente */}
        
      <Label>
        Username:
        <Input  type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </Label>
      
      
      <Label>
        Password:
        <Input  type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </Label>
      
      <Button className='mt-4 w-full' variant={"outline"} type="submit"> Login</Button>
      
    </form>
      
    
      </DialogContent>
    </Dialog>
  )
}
