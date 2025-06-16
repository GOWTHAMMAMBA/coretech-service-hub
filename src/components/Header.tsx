
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Wrench } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CORETECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/laptop-repair" className="hover:text-blue-400 transition-colors">Laptop Repair</Link>
            <Link to="/data-recovery" className="hover:text-blue-400 transition-colors">Data Recovery</Link>
            <Link to="/pc-build" className="hover:text-blue-400 transition-colors">PC Build</Link>
            <Link to="/chip-level-diagnostic" className="hover:text-blue-400 transition-colors">Chip Level</Link>
            <Link to="/priority-support" className="hover:text-blue-400 transition-colors">Priority Support</Link>
            <Link to="/home-service" className="hover:text-blue-400 transition-colors">Home Service</Link>
            <Link to="/software" className="hover:text-blue-400 transition-colors">Software</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              onClick={() => window.open("tel:+919025609769", "_self")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link to="/" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Home</Link>
              <Link to="/laptop-repair" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Laptop Repair</Link>
              <Link to="/data-recovery" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Data Recovery</Link>
              <Link to="/pc-build" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">PC Build</Link>
              <Link to="/chip-level-diagnostic" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Chip Level</Link>
              <Link to="/priority-support" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Priority Support</Link>
              <Link to="/home-service" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Home Service</Link>
              <Link to="/software" onClick={closeMenu} className="hover:text-blue-400 transition-colors py-2">Software</Link>
              <div className="pt-4 flex space-x-2">
                <Button 
                  onClick={() => window.open("tel:+919025609769", "_self")}
                  className="bg-green-600 hover:bg-green-700 text-white flex-1"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
