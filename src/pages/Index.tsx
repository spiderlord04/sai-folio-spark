
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveLink = () => {
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href')?.substring(1);
        if (href === current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink);
    
    // Call once to set initial state
    updateActiveLink();
    
    return () => {
      window.removeEventListener('scroll', updateActiveLink);
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
