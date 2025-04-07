
import React, { useEffect, useState } from 'react';
import { Code, Layout, Globe, FileCode } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { 
      name: "HTML", 
      level: 85, 
      icon: <Globe className="text-orange-500" size={24} />,
      color: "bg-orange-500"
    },
    { 
      name: "Java", 
      level: 80, 
      icon: <Code className="text-red-500" size={24} />,
      color: "bg-red-500" 
    },
    { 
      name: "UI/UX", 
      level: 75, 
      icon: <Layout className="text-purple-500" size={24} />,
      color: "bg-purple-500"
    },
    { 
      name: "JavaScript", 
      level: 70, 
      icon: <FileCode className="text-yellow-500" size={24} />,
      color: "bg-yellow-500"
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mt-16 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0, animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">{skill.icon}</div>
                <h3 className="text-xl font-medium">{skill.name}</h3>
                <span className="ml-auto text-portfolio-gray">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${skill.color}`} 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%', 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
