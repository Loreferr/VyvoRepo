import { ModeToggle } from "@/components/mode-toggle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
    <div className="header flex items-center justify-between p-3 ">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu">
        <ul className="flex items-center justify-center gap-4">
          <Button variant={"ghost"}>Home</Button>
          <Button variant={"ghost"}>About</Button>
          <Button variant={"ghost"}>Contact</Button>
        </ul>
      </div>
      <div className="account items-center gap-4 flex z-10">
        <Button variant={"outline"}>Login</Button>
        <Button variant={"outline"}>Register</Button>
        <ModeToggle></ModeToggle>
        
      </div>
      
    </div>
    <BackgroundBeams></BackgroundBeams>
    <div className="hero h-96  flex items-center justify-center">
      <h1 className="text-8xl font-bold ">Lights Up The World</h1>
    
    </div>
    
    </main>
    
    
  );
}
