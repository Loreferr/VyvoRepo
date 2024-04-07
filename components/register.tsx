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
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';



export const Register = () => {

  
  const [formData, setFormData] = useState({
    name : '',
    username: '',
    email: '',
    password: ''
  });
  const [open, setOpen] = useState(false);

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
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.text(); // Leggi la risposta come testo
  
      // Verifica se la risposta contiene un messaggio di conferma
      if (responseData.toLowerCase().includes("user registered")) {
        console.log('Utente registrato con successo!');
        

        setFormData({
          name: '',
          username: '',
          email: '',
          password: ''
        });
        // Puoi fare ulteriori azioni qui, se necessario
      } else {
        // Altrimenti, la risposta non è come previsto
        console.error('La risposta dall\'API non è come previsto:', responseData);
      }
  
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
    }
  };



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className='text-4x1 font-bold'>Register</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </Label>
      <Label>
        Username:
        <Input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </Label>
      
      <Label>
        Email:
        <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </Label>
      
      <Label>
        Password:
        <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </Label>
      
      <Button className='mt-4' variant={"outline"} type="submit"> Register</Button>
      
    </form>
      
    
      </DialogContent>
    </Dialog>
  )
}
