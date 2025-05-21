import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="OrchestAll AI Logo" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#solution" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Solution</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
            <a href="#use-cases" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Industries</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          {/* Demo CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 bg-white shadow-lg border-t border-gray-100 py-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">Home</a>
          <a href="#solution" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">Solution</a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">Benefits</a>
          <a href="#use-cases" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">Industries</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 transition-colors">Contact</a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;