import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export const AlertComponent = ({ show, variant, onClose, children }) => {
    if (!show) return null;
  
    return (
     <div className={`fixed top-0 left-0 right-0 p-4 bg-${variant} text-white`}>
        <Alert >
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      
      </div>
    );
  }
