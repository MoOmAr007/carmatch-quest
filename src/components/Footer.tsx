import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">CarMatch</span>
            </div>
            <p className="text-background/70 mb-6">
              Find your perfect car with AI-powered recommendations. Smart, simple, and personalized just for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-background/70 hover:text-background transition-colors">Home</a></li>
              <li><a href="/quiz" className="text-background/70 hover:text-background transition-colors">Find Cars</a></li>
              <li><a href="/cars" className="text-background/70 hover:text-background transition-colors">Browse Cars</a></li>
              <li><a href="/about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Car Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Car Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Sedans</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">SUVs</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Hatchbacks</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Crossovers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Electric Cars</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 CarMatch. All rights reserved. Built with ❤️ for car enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;