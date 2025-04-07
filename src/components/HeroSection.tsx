import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-portfolio-light to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div
            className="w-full md:w-1/2 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkblue mb-4">
              G. Phalgun Sai
            </h1>
            <div className="h-1 w-24 bg-portfolio-blue mb-6"></div>
            <p className="text-lg md:text-xl text-portfolio-gray mb-8 leading-relaxed">
              Aspiring developer passionate about building modern, efficient software solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="w-full md:w-1/2 flex justify-center animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/sai.png"
                alt="Phalgun Sai"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#skills"
            className="flex flex-col items-center text-portfolio-gray hover:text-portfolio-blue transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
