
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Vote, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-sbh-600">SBH</span>
          <span className="hidden md:inline text-neutral-500 text-sm">Dining Delight</span>
        </Link>
        
        <div className="flex items-center space-x-1 md:space-x-4">
          <Link to="/" className="nav-link flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link to="/vote" className="nav-link flex items-center space-x-1">
            <Vote className="w-4 h-4" />
            <span className="hidden md:inline">Vote</span>
          </Link>
          <Button variant="outline" asChild className="ml-2">
            <Link to="/login" className="flex items-center space-x-1">
              <LogIn className="w-4 h-4" />
              <span className="hidden md:inline">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
