
import React, { useEffect, useState } from 'react';
import { School, BookOpen, GraduationCap } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const EducationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const education: EducationItem[] = [
    {
      institution: "Keshava Reddy School",
      degree: "10th Class",
      year: "Completed",
      description: "Completed secondary education with distinction.",
      icon: <School className="w-6 h-6 text-portfolio-blue" />,
    },
    {
      institution: "MJPTBCW Residential Jr. College (Govt)",
      degree: "Intermediate",
      year: "Completed",
      description: "Pursued intermediate education in science stream.",
      icon: <BookOpen className="w-6 h-6 text-portfolio-blue" />,
    },
    {
      institution: "Malla Reddy University",
      degree: "B.Tech",
      year: "Current",
      description: "Currently pursuing Bachelor of Technology degree.",
      icon: <GraduationCap className="w-6 h-6 text-portfolio-blue" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("education");
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="education" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-portfolio-blue/30"></div>
          
          {education.map((item, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } mb-16 animate-fade-in`}
              style={{ 
                opacity: 0,
                animationDelay: `${0.2 + index * 0.2}s`,
                animationPlayState: isVisible ? 'running' : 'paused'
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-portfolio-blue/50 z-10 flex items-center justify-center">
                {item.icon}
              </div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
              }`}>
                <div className="card p-6 h-full">
                  <h3 className="text-xl font-bold text-portfolio-darkblue">{item.institution}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-portfolio-blue font-medium">{item.degree}</span>
                    <span className="bg-portfolio-blue/10 text-portfolio-blue text-sm py-1 px-3 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-portfolio-gray">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
