
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkgray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">G. Phalgun Sai</h3>
            <p className="text-sm text-gray-300 mt-1">Aspiring Developer</p>
          </div>
          
          <div className="text-sm text-gray-300">
            &copy; {currentYear} G. Phalgun Sai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
