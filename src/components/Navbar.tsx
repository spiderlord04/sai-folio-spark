
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-heading font-bold text-portfolio-darkblue">
          G. Phalgun Sai
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-portfolio-darkgray p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a href="#home" className="nav-link text-xl" onClick={toggleMobileMenu}>
            Home
          </a>
          <a href="#skills" className="nav-link text-xl" onClick={toggleMobileMenu}>
            Skills
          </a>
          <a href="#education" className="nav-link text-xl" onClick={toggleMobileMenu}>
            Education
          </a>
          <a href="#projects" className="nav-link text-xl" onClick={toggleMobileMenu}>
            Projects
          </a>
          <a href="#contact" className="nav-link text-xl" onClick={toggleMobileMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
