"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

const  LoginForm = () => {

    const { toast } = useToast()
  const [error, setError] = useState("");
  const router = useRouter();
  
  
  
  

  
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
      const response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
      
       
  
      // Verifica se la risposta contiene un messaggio di conferma
      if (responseData) {
        console.log('Login effettuato con successo!', responseData);
        localStorage.setItem('accessToken', responseData.token);
        localStorage.setItem('username', responseData.username);
        localStorage.setItem('isLoggedin', 'true');
        toast({
          description: "Login has been successful"
        })
        router.push('/');
        
        
        

        setFormData({
          
          username: '',
          
          password: ''
        });
        // Puoi fare ulteriori azioni qui, se necessario
      } else {
        // Altrimenti, la risposta non è come previsto
        console.error('La risposta dall\'API non è come previsto:', responseData);
        setError('Credenziali non valide. Si prega di riprovare.');
        
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
        <CardTitle className="text-6x1 font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
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
        Password:
        <Input  type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </Label>
      
      <Button className='mt-4 w-full' variant={"default"} type="submit"> Sign Up</Button>
      <p className="font-bold text-sm mt-4">You are not registered yet? <Link href="/register"><Button className="size-sm" variant={"link"}>Register</Button></Link></p>
      
    </form>
      </CardContent>
    </Card>
    </>
  )
}


export default LoginForm;