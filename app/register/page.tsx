"use client"

import React, { useState } from 'react';


  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";

import { Terminal } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import  {Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export const Register = () => {
const router = useRouter();
    const { toast } = useToast()
  const [formData, setFormData] = useState({
    
    username: '',
    email: '',
    password: ''
  });
  
  const [error, setError] = useState("");

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
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.text(); // Leggi la risposta come testo
  
      // Verifica se la risposta contiene un messaggio di conferma
      if (responseData.toLowerCase().includes("user registered success")) {
        console.log('Utente registrato con successo!');
        toast({
            description: "User Registered"
          })
        router.push('/login');

        setFormData({
          
          username: '',
          email: '',
          password: ''
        });
        toast({ description: 'Registrazione avvenuta con successo!' });
        // Puoi fare ulteriori azioni qui, se necessario
      } else {
        // Altrimenti, la risposta non è come previsto
        setError('Errore durante la registrazione. Si prega di riprovare.');
        console.error('La risposta dall\'API non è come previsto:', responseData);
      }
  
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
    }
  };



  return (
    <>
    <div className="toggle absolute top-5 right-5">
    <ModeToggle></ModeToggle>
    </div>
    
    <Card className="mx-auto my-auto max-w-sm ">
      <CardHeader>
        <CardTitle className="text-6x1 font-bold">Register</CardTitle>
        <CardDescription>
        Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
      
      <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Visualizza l'errore se presente */}
        
      <Label>
        Username:
        <Input  type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </Label>
      <Label>
        Email:
        <Input  type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </Label>
      
      <Label>
        Password:
        <Input  type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </Label>
      
      <Button className='mt-4 w-full' variant={"outline"} type="submit"> Sign Up</Button>
      <p className="font-bold text-sm mt-4">Already registered? <Link href="/login"><Button className="size-sm" variant={"link"}>Login</Button></Link></p>
      
    </form>
      </CardContent>
    </Card>
    </>
      
    
      
  )
}

export default Register