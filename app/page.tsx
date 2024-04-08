

import Cardlist from "@/components/cardlist";
import { ModeToggle } from "@/components/mode-toggle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";



import { Login } from "@/components/login";
import { Register } from "@/components/register";
import { useState } from "react";
import { Header } from "@/components/header";






export default function Home() {

  
  
  
 



  return (
    <main>
    <Header></Header>
    <BackgroundBeams></BackgroundBeams>
    <div className="hero h-96  flex items-center justify-center">
      <h1 className="text-8xl font-bold ">Lights Up The World</h1>
    
    </div>
    
    
    <Cardlist></Cardlist>


    
    </main>
    
    
  );
}
