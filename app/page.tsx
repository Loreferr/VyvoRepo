import Cardlist from "@/components/cardlist";
import { ModeToggle } from "@/components/mode-toggle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";




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
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="email"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              defaultValue="email"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        <Button variant={"outline"}>Register</Button>
        <ModeToggle></ModeToggle>
        
      </div>
      
    </div>
    <BackgroundBeams></BackgroundBeams>
    <div className="hero h-96  flex items-center justify-center">
      <h1 className="text-8xl font-bold ">Lights Up The World</h1>
    
    </div>
    
    
    <Cardlist></Cardlist>


    
    </main>
    
    
  );
}
