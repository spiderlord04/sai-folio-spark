
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const ContactSection: React.FC = () => {
  const contacts: ContactItem[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "g.sai641642@gmail.com",
      link: "mailto:g.sai641642@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9505996292",
      link: "tel:+919505996292"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "#" // Replace with actual LinkedIn profile link if available
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View on GitHub",
      link: "#" // Replace with actual GitHub profile link if available
    }
  ];

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="card p-6 flex items-center hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              target={contact.link?.startsWith('http') ? '_blank' : undefined}
              rel={contact.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue mr-4">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-sm text-portfolio-gray">{contact.label}</h3>
                <p className="font-medium text-portfolio-darkgray">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
