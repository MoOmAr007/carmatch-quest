import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">CarMatch</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/quiz" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Find Cars
            </a>
            <a href="/cars" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Browse Cars
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="/quiz" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Find Cars
              </a>
              <a href="/cars" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Browse Cars
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </a>
              <hr className="border-border" />
              <Button variant="ghost" className="text-muted-foreground hover:text-primary justify-start">
                Sign In
              </Button>
              <Button className="bg-gradient-hero text-primary-foreground justify-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;