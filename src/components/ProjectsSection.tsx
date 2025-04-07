
import React, { useEffect, useState } from 'react';
import { FileCode, ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoLink?: string;
}

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      title: "Online Recipe Sharing",
      description: "A collaborative recipe platform to upload and browse food recipes. Uses Java, HTML, and MySQL.",
      technologies: ["Java", "HTML", "MySQL", "CSS"],
    },
    {
      title: "CostMate",
      description: "Personal finance tracker built using Java and database integration. Helps manage daily expenses.",
      technologies: ["Java", "SQL", "JavaFX"],
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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group animate-scale-in overflow-hidden h-full flex flex-col"
              style={{ 
                opacity: 0,
                animationDelay: `${0.3 + index * 0.2}s`,
                animationPlayState: isVisible ? 'running' : 'paused'
              }}
            >
              <div className="p-6 flex-grow">
                <div className="mb-4 text-portfolio-blue">
                  <FileCode size={32} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-portfolio-darkblue group-hover:text-portfolio-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-portfolio-gray mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-portfolio-blue text-xs py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
                <div className="flex items-center">
                  <Code size={16} className="text-portfolio-gray mr-2" />
                  <span className="text-sm text-portfolio-gray">Java-based</span>
                </div>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:text-portfolio-darkblue transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-1 text-sm">Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
