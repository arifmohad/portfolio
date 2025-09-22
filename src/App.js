import { useState, useEffect, useRef } from 'react';
import myImage from './assets/1.jpg';
import Background from './assets/2.png';


export default function App() {
  const sections = useRef({
    about: null,
    experience: null,
    projects: null,
    skills: null,
    contact: null
  });

  const scrollToSection = (sectionId) => {
    sections.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Background image */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">M.A.</div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-indigo-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with left-aligned text and animated image */}
      <section className="min-h-screen flex items-center pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MOHAMMED ARIF
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-700">
              Python Developer | Django | AWS | React
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
              I build scalable web applications and RESTful APIs with a focus on security, 
              performance, and seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Contact Me
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                View Projects
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={myImage} 
                alt="Coding illustration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-12 relative z-10">
        {/* About Me */}
        <section ref={el => sections.current.about = el} className="py-12">
          <div className="flex items-center mb-8">
            <div className="h-1 flex-grow bg-indigo-200"></div>
            <h2 className="px-4 text-3xl font-bold text-center">About Me</h2>
            <div className="h-1 flex-grow bg-indigo-200"></div>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.01] space-y-4">
            <p className="text-lg leading-relaxed">
              I am a highly motivated Python Developer with over one year of hands-on experience in designing, developing, and deploying scalable web applications and RESTful APIs using Django and Flask. My work focuses on building secure, high-performance solutions that meet business and technical requirements.
            </p>
            <p>
              In addition to backend development, I specialize in real-time communication protocols, including MQTT, enabling seamless interaction between IoT devices and web applications. I have successfully integrated embedded systems with software solutions, allowing real-time data monitoring and control for complex hardware setups.
            </p>
            <p>
              On the frontend, I build responsive, user-friendly interfaces using React.js and Tailwind CSS, ensuring a consistent and visually appealing experience across devices. My approach combines clean, maintainable code with scalable architectures, enabling rapid development without compromising quality.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section ref={el => sections.current.experience = el} className="py-12">
          <div className="flex items-center mb-8">
            <div className="h-1 flex-grow bg-indigo-200"></div>
            <h2 className="px-4 text-3xl font-bold text-center">Work Experience</h2>
            <div className="h-1 flex-grow bg-indigo-200"></div>
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="font-bold text-xl">Software Engineer – Cabal Technologies LLP</h3>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">01/2024 – Present</span>
              </div>
              <p className="text-sm opacity-75 mt-1">Ernakulam, India</p>
              <ul className="mt-4 space-y-2">
                <li className="flex">
                  <span className="mr-2 text-indigo-500">•</span>
                  Developed Django-based web applications and REST APIs.
                </li>
                <li className="flex">
                  <span className="mr-2 text-indigo-500">•</span>
                  Integrated embedded systems with APIs and MQTT for real-time communication.
                </li>
                <li className="flex">
                  <span className="mr-2 text-indigo-500">•</span>
                  Deployed applications on AWS Lightsail and EC2 with SSL configuration.
                </li>
                <li className="flex">
                  <span className="mr-2 text-indigo-500">•</span>
                  Developed responsive UIs using React.js and Tailwind CSS.
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="font-bold text-xl">Python Internship Trainee – INMAKES INFOTECH</h3>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">Full Stack Developer</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex">
                  <span className="mr-2 text-indigo-500">•</span>
                  Developed Python/Django applications and contributed to frontend integration.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section ref={el => sections.current.projects = el} className="py-12">
          <div className="flex items-center mb-8">
            <div className="h-1 flex-grow bg-indigo-200"></div>
            <h2 className="px-4 text-3xl font-bold text-center">Projects</h2>
            <div className="h-1 flex-grow bg-indigo-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2">🔥</span> FuelTM
              </h3>
              <p className="opacity-90">
                Integrated hardware & software solution for real-time generator monitoring.  
                Tracks fuel levels, generator data, calculates consumption & cost, provides ON/OFF control, and communicates via MQTT.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2">⚡</span> GP365 – Automatic Changeover
              </h3>
              <p className="opacity-90">
                Manages power supply switching and current limitation for safe operations. Implemented using Django REST framework.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2">🔒</span> Secure University Exam Evaluation
              </h3>
              <p className="opacity-90">
                Implemented AES encryption, SHA hashing, and AWS S3 storage for secure exam evaluation.  
                Features included bulk student allocation, instant result viewing, and revaluation workflow.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2">👓</span> E-Sight for the Blind
              </h3>
              <p className="opacity-90">
                Wearable smart glasses with camera, ultrasonic sensors, and speaker to assist blind and partially blind users.  
                Real-time object detection, obstacle alerts, and Android interface for additional accessibility.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl md:col-span-2 bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2">📦</span> Product Registration & Warranty System
              </h3>
              <p className="opacity-90">
                Full-stack system with Python REST API backend and React + Tailwind frontend.  
                Implements secure token-based authentication, product registration, warranty tracking, and real-time status updates.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section ref={el => sections.current.skills = el} className="py-12">
          <div className="flex items-center mb-8">
            <div className="h-1 flex-grow bg-indigo-200"></div>
            <h2 className="px-4 text-3xl font-bold text-center">Skills</h2>
            <div className="h-1 flex-grow bg-indigo-200"></div>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                Python (Django, Flask, REST API)
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                Java & Android Development
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                React.js & Tailwind CSS
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                HTML, CSS, JavaScript, AJAX
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                MySQL, MongoDB
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                AWS EC2 & Lightsail, SSL
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                MQTT (Mosquitto)
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                Git & Version Control
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-indigo-500">▹</span>
                Agile Methodology
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer ref={el => sections.current.contact = el} className="py-12 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a 
              href="mailto:mohammedarifzio786@gmail.com" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              <span className="mr-2">✉️</span> Email Me
            </a>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/arifmohad" 
                className="p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammed-arif-0a2665211" 
                className="p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="text-sm opacity-75">© {new Date().getFullYear()} Mohammed Arif. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}