"use client"


import { Header } from '@/components/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';

const UpdateUser = () => {
  
  const  username  = localStorage.getItem('username')
  
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Carica i dati dell'utente dal backend quando il componente viene montato
    fetch(`http://localhost:8080/api/auth/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data); // Imposta i dati dell'utente nello stato locale
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [username]);

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/auth/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const message = await response.text(); // Leggi la risposta come testo
        console.log('Aggiornamento utente riuscito:', message);

        if (userData.username !== username) {
            localStorage.setItem('username', userData.username);
            console.log('Username aggiornato nel localStorage.');
        }
    } else {
        const errorMessage = await response.text();
        console.error('Errore durante l aggiornamento dell utente:', errorMessage);
        throw new Error(errorMessage || 'Failed to update user');
    }
} catch (error) {
    console.error('Errore nella chiamata API:', error);
}
  };
  return (
      <>
      <Link  href='/'><Button className='mb-10 mt-4 ml-8' variant={"outline"}>Torna alla Home</Button></Link>
      <div className="container  px-auto border bg-background rounded-[0.5rem] shadow-lg">
        <div className="head my-10">
        <h1 className='text-3xl font-bold '>Settings</h1>
        <p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>
        </div>
        
        <Separator/>
      <div className="wrap  flex items-start  p-4 flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 ">
        <div className="aside  -mx-4 lg:w-1/5 flex flex-col">
          <nav className='flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 pl-4'>
            <a className='inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors   hover:text-accent-foreground h-9 px-4 py-2  hover:bg-muted justify-start' href="">Profile</a>
            <a className='inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors   hover:text-accent-foreground h-9 px-4 py-2  hover:bg-muted justify-start' href="">Appearance</a>
            <a className='inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors   hover:text-accent-foreground h-9 px-4 py-2  hover:bg-muted justify-start' href="">
              Logout
            </a>
            
            
          </nav>
        </div>
        <div className="profile flex-1 lg:max-w-2xl space-y-6">
        
        
        <h2 className='font-bold
          text-2xl'>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <Label htmlFor="name">Name:</Label>
              <Input type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
            </div>
            <div className='mb-2'>
              <Label htmlFor="username">Username:</Label>
              <Input type="text" id="username" name="username" value={userData.username} onChange={handleChange} />
            </div>
            <div className='mb-2'>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
            </div>
            <div className='mb-2'>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
            </div>
            <Button className='my-8' variant={"default"} size={"lg"} type="submit">Update Profile</Button>
          </form>
        
        </div>
        <div className="avatar justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        </div>
      </div>
      </div>
        
    
    </>
    
  );
};

export default UpdateUser;


