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

//   const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };

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
            <div className="flex space-x-4 relative z-20">
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
                <li className="flex">
                <span className="mr-2 text-indigo-500">•</span>
                Worked on database operations using SQLite and MySQL.
              </li>
              <li className="flex">
                <span className="mr-2 text-indigo-500">•</span>
                Assisted in debugging and testing web applications to ensure smooth performance.
              </li>
              <li className="flex">
                <span className="mr-2 text-indigo-500">•</span>
                Collaborated with team members to build and deploy small-scale web projects.
              </li>
              <li className="flex">
                <span className="mr-2 text-indigo-500">•</span>
                Gained hands-on experience with HTML, CSS, JavaScript, and Bootstrap for frontend development.
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
      <footer ref={el => sections.current.contact = el} className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      Get In Touch
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
      I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
      I'll try my best to get back to you!
    </p>
    
    {/* Contact Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-10">
      {/* Email Button */}
      <button 
        onClick={() => window.open('mailto:mohammedarifzio786@gmail.com', '_self')}
        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Email Me
      </button>

      {/* Phone Button */}
      <button 
        onClick={() => window.open('tel:+1234567890')} // Replace with your actual number
        className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Me
      </button>
    </div>

    {/* Social Links */}
    <div className="flex justify-center space-x-6 mb-12">
      {/* GitHub */}
      <a 
        href="https://github.com/arifmohad" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 group"
        aria-label="GitHub"
      >
        <svg className="w-6 h-6 text-gray-800 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/mohammed-arif-0a2665211" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 group"
        aria-label="LinkedIn"
      >
        <svg className="w-6 h-6 text-gray-800 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      {/* Twitter (Optional) */}
      <a 
        href="https://twitter.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 group"
        aria-label="Twitter"
      >
        <svg className="w-6 h-6 text-gray-800 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>
    </div>

    {/* Contact Info */}
    <div className="text-center space-y-2 mb-8">
      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> mohammedarifzio786@gmail.com
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Phone:</span> +91 9745653208
      </p>
    </div>

    <div className="border-t border-gray-200 pt-8 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Mohammed Arif. All rights reserved.
      </p>
    </div>
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